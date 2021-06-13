import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Project, Task } from '../../data/task.model';
import { slideInOutLeft } from '../../animations/slides';
import { UserInterfaceService } from '../../services/user-interface.service';
import { take } from 'rxjs/operators';
import { AddRemoveItem } from '../../core/AddRemoveItem';
import { ItemBase } from '../../core/base/ItemBase';
import { ItemType } from '../../core/base/ItemType';
import { environment } from '../../../../environments/environment.prod';
import { SnackbarType } from '../../utils/handlers/SnackbarType';
import { SnackbarTime } from '../../utils/handlers/SnackbarTime';

@Component({
  selector: 'app-task-categories',
  animations: [slideInOutLeft],
  templateUrl: './task-categories.component.html',
  styleUrls: ['./task-categories.component.sass']
})
export class TaskCategoriesComponent extends ItemBase<Project> implements AddRemoveItem {

  constructor(
    public taskService: TaskService,
    public uiService: UserInterfaceService
  ) {

      super(uiService);

      this.taskService.addItem(
        new Project('01', 'Titulo - Projeto', [
        new Task(new Date(), 'Titulo - Tarefa', 'Descricao', '01')
      ]));

      taskService.getCurrentProjectSubject().next(this.taskService.getProjects()[0]);
  }

  onProjectSelect(project: Project) {
    this.taskService.getCurrentProjectSubject().next(project);
  }

  onAddItem() : void {
    const auxOne = this.dialogResponse(environment.addProjectTitle, ItemType.AddProject)
    auxOne.pipe(take(1))
          .subscribe(
            response => {
              if (response.dialog.isDialogSubmitted) {
                this.taskService.addItem(response.item);
                this.uiService.showSnackbar(SnackbarType.SUCCESS,
                environment.projectSuccessfullyAdded,
                SnackbarTime.LONG
                );
              }
            }
          );
  }

  onRemoveItem(itemId: string): void {
    const auxOne = this.dialogResponse(environment.removeProjectTitle, ItemType.RemoveProject);
    const auxTwo = this.taskService.getCurrentProjectSubject();
    auxOne.pipe(take(1))
          .subscribe(
            response => {
              if (response.dialog.isDialogSubmitted) {
                this.taskService.removeItem(itemId, null);
                this.uiService.showSnackbar(SnackbarType.SUCCESS,
                environment.projectSuccessfullyRemoved,
                SnackbarTime.LONG
                );
              }
            }
          );
  }

}
