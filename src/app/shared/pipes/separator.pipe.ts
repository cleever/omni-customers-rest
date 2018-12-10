import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separator'
})

export class SeparatorPipe implements PipeTransform {
  transform(value, args) {
    if (!value) {
      return value;
    }
    if (args === '-') {
      return ` - ${value}`;
    } else {
      return `, ${value}`;
    }
  }
}
