import { Injectable } from '@angular/core';

import { Task, Project } from '../data/task.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private readonly project: Project[] = [];
  private currentProjectSubject: Subject<Project> = new BehaviorSubject(null);

  public addItem(project: Project, task?: Task): void {
    if (task) {
      this.project.find(value => value === project)
          .tasks.push(task);
    } else {
      this.project.push(project);
    }
  }

  public removeItem(projectId: string, taskId?: string): void {
    if (taskId) {
      this.project.find(value => value.id === projectId)
          .tasks.splice(this.getItemIndex(taskId), 1);
    } else {
      this.project.splice(this.getItemIndex(projectId), 1);
      this.clearCurrentProjectSubjectOnUnselect();
    }
  }

  public getProjects(): Project[] {
    return this.project;
  }

  public getCurrentProjectSubject(): Subject<Project> {
    return this.currentProjectSubject;
  }

  private clearCurrentProjectSubjectOnUnselect(): void {
    this.currentProjectSubject.next(null);
  }

  private getItemIndex(itemId: string): number {
    return this.project.map(value => value.id).indexOf(itemId);
  }
}
