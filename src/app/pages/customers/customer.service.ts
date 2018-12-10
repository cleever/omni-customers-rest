import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { DataService } from 'src/app/core/services/data.service';
import { QueryOptions } from 'src/app/core/services/query-options';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  avatarIndex = 1;

  customers: Customer[] = [];
  onCustomerSelected: BehaviorSubject<any>;
  CUSTOMERS_ROUTE = 'customers';
  private qo: QueryOptions = new QueryOptions();

  constructor(private dataService: DataService) {
    this.onCustomerSelected = new BehaviorSubject(null);
  }

  async getCustomers() {
    await this.load();
    return this.customers;
  }

  hasMore(): boolean {
    return this.qo.hasMore;
  }

  async loadMore() {
    if (this.qo.hasMore && !this.qo.isPaginating) {
      this.qo.next();
      await this.load();
    }
    return this.customers;
  }

  getPicture(index: number) {
    if (index % 6 === 0) {
      this.avatarIndex = 1;
    }
    return `${this.avatarIndex++}.jpg`;
  }

  async load() {
    let result = await this.dataService.find<Customer[]>(this.CUSTOMERS_ROUTE, this.qo).toPromise();
    result = result.map((t, index) => {
      const customer = Object.assign(new Customer(), t);
      customer.picture = this.getPicture(index);
      return customer;
    });
    this.qo.done(result.length);
    this.customers = this.customers.concat(result);
  }
}
