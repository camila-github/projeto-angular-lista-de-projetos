import { TaskStatus } from './TaskStatus';
import { TimeStamp } from '../TimeStamp';

// TODO Give user possibility to change these dynamically in settings
const STATUS_LOW_SECONDS = 5;
const STATUS_NORMAL_SECONDS = 8;

export class TaskPriority {

  // Priority depends on time passed since task has been posted.
  public static getPriority(taskDate: Date): string {
    return TimeStamp.getSecondsPassed(taskDate) < STATUS_LOW_SECONDS ? TaskStatus.LOW :
      TimeStamp.getSecondsPassed(taskDate) < STATUS_NORMAL_SECONDS ? TaskStatus.NORMAL :
      TaskStatus.URGENT;
  }
}
