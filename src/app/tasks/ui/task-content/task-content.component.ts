import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../data/task.model';
import { AddRemoveItem } from '../../core/AddRemoveItem';
import { UserInterfaceService } from '../../services/user-interface.service';
import { ItemType } from '../../core/base/ItemType';
import { combineLatest } from 'rxjs';
import { SnackbarType } from '../../utils/handlers/SnackbarType';
import { SnackbarTime } from '../../utils/handlers/SnackbarTime';
import { environment } from '../../../../environments/environment.prod';
import { ItemBase } from '../../core/base/ItemBase';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-task-content',
  templateUrl: './task-content.component.html',
  styleUrls: ['./task-content.component.sass']
})

export class TaskContentComponent extends ItemBase<Task> implements AddRemoveItem {

  currentTaskIndex;

  constructor(
    public taskService: TaskService,
    public uiService: UserInterfaceService
  ){
    super(uiService);
  }

  setTaskIndex(index: number) {
    this.currentTaskIndex = index;
  }

  nextTask() {
    this.currentTaskIndex++;
  }

  previousTask() {
    this.currentTaskIndex--;
  }

  // first observable holds task and dialog data, second dialog holds project data
  onAddItem(): void {
    const auxOne = this.dialogResponse(environment.addTaskTitle, ItemType.AddTask);
    const auxTwo = this.taskService.getCurrentProjectSubject();
    combineLatest([ auxOne, auxTwo])
      .pipe(take(1))
      .subscribe(value => {
        if (value[0].dialog.isDialogSubmitted) {
          this.taskService.addItem(value[1], value[0].item);
          this.uiService.showSnackbar(SnackbarType.SUCCESS,
            environment.taskSuccessfullyAdded,
            SnackbarTime.LONG
          );
        }
      });
  }

  onRemoveItem(itemId: string): void {
    const auxOne = this.dialogResponse(environment.removeTaskTitle, ItemType.RemoveTask)
    const auxTwo = this.taskService.getCurrentProjectSubject()

    combineLatest([ auxOne, auxTwo ])
      .pipe(take(1))
      .subscribe(value => {
        if (value[ 0 ].dialog.isDialogSubmitted) {
          this.taskService.removeItem(value[ 1 ].id, itemId);
          this.uiService.showSnackbar(SnackbarType.SUCCESS,
            environment.taskSuccessfullyRemoved,
            SnackbarTime.LONG
          );
        }
      });
  }
}
