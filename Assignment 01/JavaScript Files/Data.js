"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
class Data {
    constructor() {
        this._course = "";
        this._topic = "";
        this._teacher = "";
        this._time = new Date();
    }
    showData(courseNumber, topicName, teacherName, time) {
        this._course = courseNumber;
        this._topic = topicName;
        this._teacher = teacherName;
        this._time = time;
    }
    get course() {
        return this._course;
    }
    get topic() {
        return this._topic;
    }
    get teacher() {
        return this._teacher;
    }
    get time() {
        return this._time;
    }
}
exports.Data = Data;
