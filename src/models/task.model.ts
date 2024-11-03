import { Priority } from "../types/priority.types";

export class TaskModel {
    public _id: number;
    public name: string;
    public description: string;
    public tags: string[];
    public priority: Priority;
    public users?: string[];
    public checkList?: string[];
    public attachedFiles?: string[];
    constructor(
        _id: number,
        name: string,
        description: string,
        tags: string[],
        priority: Priority,
        users?: string[],
        checklist?: string[],
        attachedFiles?: string[]
    ) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.users = users;
        this.tags = tags;
        this.checkList = checklist;
        this.attachedFiles = attachedFiles;
    }
}
