"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
class Teacher {
    constructor() {
        this.data = {};
        this.displayData = () => {
            console.log("Teacher View:\n" +
                `Course No: ${this.data.course}\n` +
                `Topic: ${this.data.topic}\n` +
                `Teacher: ${this.data.teacher}\n` +
                "time: " +
                this.data.time.toLocaleString("de-DE", { hour12: false }));
        };
    }
    inputData(data) {
        this.data = data;
    }
}
exports.Teacher = Teacher;
