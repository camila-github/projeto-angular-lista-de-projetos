export class Project {
  constructor(
    public id: string = new Date().getTime().toString(),
    public title: string = '',
    public tasks: Task[] = []) {
  }
}

export class Task {
  constructor(
    public date: Date,
    public title: string = '',
    public description: string = '',
    public id: string = new Date().getTime().toString()) {
  }
}
