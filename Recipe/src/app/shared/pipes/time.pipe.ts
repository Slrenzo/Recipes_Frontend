import { Pipe, PipeTransform } from '@angular/core';

@Pipe({	name: 'time' })
export class TimePipe implements PipeTransform {
  transform(value: number) {
    return value < 60 ? value + 'min' : Math.round(value / 60) + 'h' + value % 60 + 'min';
  }
}
