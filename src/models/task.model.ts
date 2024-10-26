export class TaskModel {
    public name: string;
    public description: string;
    public tags: string[];
    public checkList: string[];
    public attachedFiles: string[];
    constructor(
        name: string,
        description: string,
        tags: string[],
        checklist: string[],
        attachedFiles: string[]
    ) {
        this.name = name;
        this.description = description;
        this.tags = tags;
        this.checkList = checklist;
        this.attachedFiles = attachedFiles;
    }
}
