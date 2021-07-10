export class Data {
    private _course: string = "";
    private _topic: string = "";
    private _teacher: string = "";
    private _time: Date =new Date()


    showData(courseNumber: string, topicName: string, teacherName: string, time:Date) {
        this._course = courseNumber;
        this._topic = topicName;
        this._teacher = teacherName;
        this._time=time
    }


    get course(): string {
        return this._course;
    }

    get topic(): string {
        return this._topic;
    }

    get teacher(): string {
        return this._teacher;
    }

    get time(): Date {
        return this._time;
    }
}

