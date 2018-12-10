import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, CustomerDetailComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MaterialModule,
    SharedModule,
    InfiniteScrollModule
  ]
})
export class CustomersModule { }
