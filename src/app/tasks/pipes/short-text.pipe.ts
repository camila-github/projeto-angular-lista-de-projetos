import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';


@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(text: string, textSize: number): any {
    if (text == null) {
      return environment;
    } else {
      return text.length > 0 ? text.substring(0, textSize) : environment;
    }
  }
}
