export class TimeStamp {

  public static getTimeStamp(taskDate: Date): string {

    const secondsPassed = this.getSecondsPassed(taskDate);

    const secondsInDay = 60 * 60 * 24;
    const secondsInHour = 60 * 60;
    const secondsInMinute = 60;

    const days = Math.floor(secondsPassed / secondsInDay);
    const hours = Math.floor(secondsPassed % secondsInDay / secondsInHour);
    const minutes = Math.floor(secondsPassed % secondsInDay % secondsInHour / secondsInMinute);
    const seconds = Math.floor(secondsPassed % secondsInDay % secondsInHour % secondsInMinute);

    return `${days > 0 ? days + 'd' : ''} ` +
      `${hours > 0 ? hours + 'h' : ''} ` +
      `${minutes > 0 ? minutes + 'm' : ''} ` +
      `${seconds > 0 ? seconds + 's' : 'Now'}`;
  }

  public static getSecondsPassed(taskDate: Date): number {
    return (new Date().getTime() - taskDate.getTime()) / 1000;
  }
}
