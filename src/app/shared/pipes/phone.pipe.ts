import { Pipe, PipeTransform } from '@angular/core';
import { format, AsYouType } from 'libphonenumber-js';

@Pipe({
  name: 'phone'
})

export class PhonePipe implements PipeTransform {
  transform(value, args) {
    if (!value) {
      return value;
    }
    return new AsYouType('BR').input(value);
  }
}
