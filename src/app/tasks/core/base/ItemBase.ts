import { Observable } from 'rxjs';
import { AddItemDialogModel } from '../../components/add-item-dialog/add-item-dialog.model';
import { UserInterfaceService } from '../../services/user-interface.service';

export class ItemBase<T> {

  constructor(public uiService: UserInterfaceService) { }

  // Item type can be project || task
  public dialogResponse(dialogTitle: string, itemType: string): Observable<any> {
    const dialogInstance = this.uiService.openDialog(
      new AddItemDialogModel(dialogTitle), itemType);

    dialogInstance.componentInstance.uiService = this.uiService;
    return dialogInstance.afterClosed();
  }
}
