import { Observer } from "./Observer";
import { Data } from "./Data";

export class Student implements Observer {
  data = {} as Data;
  inputData(data: Data) {
    this.data = data;
  }

   displayData = (): void => {
    console.log(
      "Student View:\n" +
        `Course No: ${this.data.course}\n` +
        `Topic: ${this.data.topic}\n` +
        `Teacher: ${this.data.teacher}\n` +
        "time: " +
        this.data.time.toLocaleString("en-us", { hour12: true })
    );
  };
}
