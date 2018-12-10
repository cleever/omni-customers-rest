import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    {
      path: 'customers', loadChildren: './customers/customers.module#CustomersModule'
    },
    {
      path: 'products', loadChildren: './products/products.module#ProductsModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
