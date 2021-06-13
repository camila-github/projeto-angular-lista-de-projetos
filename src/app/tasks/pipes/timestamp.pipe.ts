import { Pipe, PipeTransform } from '@angular/core';
import { TimeStamp } from '../utils/TimeStamp';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'timestamp'
})
export class TimestampPipe implements PipeTransform {

  transform(taskDate: Date): Observable<string> {
    return timer(0, 1000).pipe(map(() => TimeStamp.getTimeStamp(taskDate)));
  }
}
