import { Points } from "../types/points.types";
import { Priority } from "../types/priority.types";

export class TaskModel {
    public _id: number;
    public name: string;
    public description: string;
    public tags: string[];
    public priority: Priority;
    public points: Points;
    public users?: string[];
    public checkList?: { name: string; checked: boolean }[];
    public attachedFiles?: string[];
    constructor(
        _id: number,
        name: string,
        description: string,
        tags: string[],
        points: Points,
        priority: Priority,
        users?: string[],
        checklist?: { name: string; checked: boolean }[],
        attachedFiles?: string[]
    ) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.users = users;
        this.points = points;
        this.tags = tags;
        this.checkList = checklist;
        this.attachedFiles = attachedFiles;
    }
}
