import { Pipe, PipeTransform } from '@angular/core';
import { TaskPriority } from '../utils/handlers/TaskPriority';
import { TaskStatus } from '../utils/handlers/TaskStatus';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'taskPriorityIcon'
})
export class TaskPriorityIconPipe implements PipeTransform {
  // TODO improve
  transform(taskDate: Date): Observable<string> {
    return timer(0, 1000)
      .pipe(
        map(() => {
            if (TaskPriority.getPriority(taskDate) === TaskStatus.URGENT) {
              return TaskStatus.URGENT;
            } else if (TaskPriority.getPriority(taskDate) === TaskStatus.NORMAL) {
              return TaskStatus.NORMAL;
            } else if (TaskPriority.getPriority(taskDate) === TaskStatus.LOW) {
              return TaskStatus.LOW;
            }
          }
        ));
  }
}
