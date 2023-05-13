export default class Reminder {
  static idNext: number = 0;
  isComplete: boolean;
  id: number;
  dateCreated: Date;

  constructor(public title: string) {
    this.id = Reminder.idNext++;
    this.isComplete = false;
    this.dateCreated = new Date();
  }
}
