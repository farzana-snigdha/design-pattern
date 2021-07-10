import { Observer } from "./Observer";
import { Data } from "./Data";

export class Teacher implements Observer {
  data = {} as Data;

  inputData(data: Data) {
    this.data = data;
  }

  displayData = (): void => {
    console.log(
      "Teacher View:\n" +
        `Course No: ${this.data.course}\n` +
        `Topic: ${this.data.topic}\n` +
        `Teacher: ${this.data.teacher}\n` +
        "time: " +
        this.data.time.toLocaleString("de-DE", { hour12: false })
    );
  };
}
