import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'unixToIsodate' })
export class UnixToIsodatePipe implements PipeTransform {
  transform(value: any) {
    if (value) {
      return moment.unix(value).format('DD.MM. HH:mm');
    }
    return value;
  }
}
