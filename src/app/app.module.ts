import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TasksComponent} from './tasks/ui/tasks.component';
import { TaskCategoriesComponent } from './tasks/ui/task-categories/task-categories.component';
import { TaskContentComponent } from './tasks/ui/task-content/task-content.component';
import { HoverDirective } from './tasks/directives/hover.directive';
import { DateLocalePipe } from './tasks/pipes/date-locale.pipe';
import { FloatButtonComponent } from './tasks/components/float-button/float-button.component';
import { ShortTextPipe } from './tasks/pipes/short-text.pipe';
import { TimestampPipe } from './tasks/pipes/timestamp.pipe';
import { AddItemDialogComponent } from './tasks/components/add-item-dialog/add-item-dialog.component';
import { TaskPriorityIconPipe } from './tasks/pipes/task-priority-icon.pipe';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskCategoriesComponent,
    TaskContentComponent,
    HoverDirective,
    DateLocalePipe,
    FloatButtonComponent,
    ShortTextPipe,
    TimestampPipe,
    AddItemDialogComponent,
    TaskPriorityIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,

    // Material
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddItemDialogComponent]
})
export class AppModule {
}
