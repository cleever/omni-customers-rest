import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from './loader/loader.module';
import { MaterialModule } from '../material/material.module';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LoaderModule
  ],
  exports: [
    LoaderModule,
    Error404Component
  ]
})
export class ComponentsModule { }
