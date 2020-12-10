export class Stat {
    count: number;
    status: boolean;
    timeStamp: Date; 

    constructor(count: number, status: boolean, timeStamp: Date) {
        this.count = count;
        this.status = status;
        this.timeStamp = timeStamp;
    }
}