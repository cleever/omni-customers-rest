import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;

  constructor(
    private service: CustomerService
  ) { }

  ngOnInit() {
    this.service.onCustomerSelected
      .subscribe(customer => {
        if (customer) {
          this.customer = customer;
        }
      });
  }

}
