"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor() {
        this.data = {};
        this.displayData = () => {
            console.log("Student View:\n" +
                `Course No: ${this.data.course}\n` +
                `Topic: ${this.data.topic}\n` +
                `Teacher: ${this.data.teacher}\n` +
                "time: " +
                this.data.time.toLocaleString("en-us", { hour12: true }));
        };
    }
    inputData(data) {
        this.data = data;
    }
}
exports.Student = Student;
