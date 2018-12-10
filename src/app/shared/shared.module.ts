import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule
  ],
  exports: [
    MaterialModule,
    ComponentsModule,
    FlexLayoutModule,
    PipesModule
  ]
})
export class SharedModule { }
