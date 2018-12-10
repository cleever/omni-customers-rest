import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoaderComponent } from './loader.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [LoaderComponent],
  exports: [LoaderComponent]
})
export class LoaderModule { }
