import { Data } from "./Data";
import { Observer } from "./Observer";

export class Fetcher {
  data: Data;
  observer: Observer[];

  constructor(data: Data, observers: Observer[]) {
    this.data = data;
    this.observer = observers;
  }
  
  i: number = 0;
  fetchData = () => {
    for (this.i = 0; this.i < this.observer.length; this.i++) {
      this.observer[this.i].inputData(this.data);
    }
  };
}
