import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  { path: '', redirectTo: '/pages/customers', pathMatch: 'full' },
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
