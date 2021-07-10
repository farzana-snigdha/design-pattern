"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetcher = void 0;
class Fetcher {
    constructor(data, observers) {
        this.i = 0;
        this.fetchData = () => {
            for (this.i = 0; this.i < this.observer.length; this.i++) {
                this.observer[this.i].inputData(this.data);
            }
        };
        this.data = data;
        this.observer = observers;
    }
}
exports.Fetcher = Fetcher;
