import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddItemDialogModel } from './add-item-dialog.model';
import { Project, Task } from '../../data/task.model';
import { ItemType } from '../../core/base/ItemType';
import { UserInterfaceService } from '../../services/user-interface.service';
import { SnackbarType } from '../../utils/handlers/SnackbarType';
import { environment } from '../../../../environments/environment.prod';
import { SnackbarTime } from '../../utils/handlers/SnackbarTime';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html'
})
export class AddItemDialogComponent {

  public readonly dialogModel: AddItemDialogModel;
  public itemModel: Project | Task;
  public itemModelTask: Task;
  // Instance is passed from parent(where this component is invoked as dialog)
  public uiService: UserInterfaceService;

  constructor(
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    this.dialogModel = data.dialog;
    this.instantiateModel(data);
  }

  private instantiateModel(data) {
    if (data.type === ItemType.AddProject) {
      this.itemModel = new Project();
    } else if (data.type === ItemType.AddTask) {
      this.itemModel = new Task(new Date());
      this.itemModelTask = this.itemModel;
    }
  }

  public onAccept() {
    if (this.itemModel !== undefined && this.itemModel.title === '') {
      this.rejectDialogSubmission();
      return;
    }
    this.closeDialog(true);
  }

  public onDismiss(): void {
    this.closeDialog(false);
  }

  private rejectDialogSubmission(): void {
    this.uiService.showSnackbar(SnackbarType.WARNING, environment.noDialogInput, SnackbarTime.LONG);
  }

  private closeDialog(isSubmitted: boolean): void {
    this.dialogModel.isDialogSubmitted = isSubmitted;
    this.dialogRef.close(
      {
        dialog: this.dialogModel,
        item: this.itemModel
      }
    );
  }
}
