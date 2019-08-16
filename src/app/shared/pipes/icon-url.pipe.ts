import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconUrlPipe'
})
export class IconUrlPipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return `http://openweathermap.org/img/w/${value}.png`;
    }
    return value;
  }
}
