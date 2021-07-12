import { DataFetcher } from "./DataFetcher";
import { Observer } from "./Observer";
import { Subject } from "./Subject";

export class Data implements Subject{
  course!:String
  topic!:String
  teacher!:String
  time!:Date
  observers:Array<DataFetcher> = []
  registerObserver(o: DataFetcher): void {
    // throw new Error("Method not implemented.");
    this.observers.push(o)
  }
  removeObserver(o: DataFetcher): void {
    // throw new Error("Method not implemented.");
    this.observers = this.observers.filter(ob => ob !== o)
  }
  notifyObserver(): void {
    // throw new Error("Method not implemented.");
    this.observers.map(ob => {
      ob.update(this.course, this.topic, this.teacher,this.time)
      ob.displayData()
  })
  }
  measuredChanged(course:String, topic: String, teacher: String, time: Date): void{
    this.course = course
    this.topic = topic
    this.teacher = teacher
    this.time = time
    this.notifyObserver()
}
  
}