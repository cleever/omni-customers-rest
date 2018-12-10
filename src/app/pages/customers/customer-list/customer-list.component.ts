import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  loaded = false;
  constructor(
    private service: CustomerService
  ) { }

  async ngOnInit() {
    this.customers = await this.service.getCustomers();
    this.loaded = true;
  }

  select(customer: Customer): void {
    this.service.onCustomerSelected.next(customer);
  }

  async loadMore() {
    this.loaded = false;
    this.customers = await this.service.loadMore();
    this.loaded = true;
  }

  hasMore(): boolean {
    return this.service.hasMore();
  }
}
