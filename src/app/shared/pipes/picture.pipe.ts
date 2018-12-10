import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'picture' })
export class PicturePipe implements PipeTransform {
  transform(input: string): string {
    return '../assets/profile/' + input;
  }
}
