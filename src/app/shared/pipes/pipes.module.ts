import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhonePipe } from './phone.pipe';
import { DocumentPipe } from './document.pipe';
import { PicturePipe } from './picture.pipe';
import { SeparatorPipe } from './separator.pipe';

@NgModule({
  declarations: [PhonePipe,
    SeparatorPipe,
    DocumentPipe,
    PicturePipe],
  imports: [
    CommonModule
  ],
  exports: [PhonePipe,
    SeparatorPipe,
    DocumentPipe,
    PicturePipe]
})
export class PipesModule { }
