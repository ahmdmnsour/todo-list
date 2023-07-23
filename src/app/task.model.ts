export class Task {
    _title: string;
    _creationDate: Date;
    _completed: boolean;

    constructor(title: string) {
        this._title = title;
        this._creationDate = new Date();
        this._completed = false;
    }

    public get title(): string {
        return this._title;
    }

    public get creationDate(): Date {
        return this._creationDate;
    }

    public get completed(): boolean {
        return this._completed;
    }

    public set title(title: string) {
        this._title = title;
    }

    public set completed(completed: boolean) {
        this._completed = completed;
    }
}
