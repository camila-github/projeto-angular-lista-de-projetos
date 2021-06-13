import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddItemDialogComponent } from '../components/add-item-dialog/add-item-dialog.component';
import { AddItemDialogModel } from '../components/add-item-dialog/add-item-dialog.model';

@Injectable({
  providedIn: 'root'
})
export class UserInterfaceService {

  constructor(private dialog: MatDialog,
              private snackbar: MatSnackBar) {
  }

  public openDialog(dialogModel: AddItemDialogModel, itemType: string): MatDialogRef<AddItemDialogComponent> {
    return this.dialog.open(AddItemDialogComponent, {
      data: {
        dialog: dialogModel,
        type: itemType
      }
    });
  }

  // SnackbarType enum used for type, SnackbarTime used for messageDuration
  showSnackbar(type: string, message: string, messageDuration: number): void {
    this.snackbar.open(message, '', {
      panelClass: type,
      duration: messageDuration
    });
  }
}
