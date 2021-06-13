import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks/ui/tasks.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
