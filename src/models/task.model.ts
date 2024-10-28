import { Priority } from "../types/priority.types";

export class TaskModel {
    public _id: number;
    public name: string;
    public description: string;
    public tags: string[];
    public priority: Priority;
    public checkList?: string[];
    public attachedFiles?: string[];
    constructor(
        protected structure: {
            _id: number;
            name: string;
            description: string;
            priority: Priority;
            tags: string[];
            checklist?: string[];
            attachedFiles?: string[];
        }
    ) {
        this._id = structure._id;
        this.name = structure.name;
        this.description = structure.description;
        this.priority = this.structure.priority;
        this.tags = structure.tags;
        this.checkList = structure.checklist;
        this.attachedFiles = structure.attachedFiles;
    }
}
