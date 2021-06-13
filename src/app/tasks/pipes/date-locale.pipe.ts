import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateLocale'
})
export class DateLocalePipe implements PipeTransform {

  transform(date: Date): any {
    return date.toLocaleString('hr');
  }
}
