import { StageModel } from "../models/stage.model";
import { TaskModel } from "../models/task.model";

export const StagesConfig: StageModel[] = [
    {
        name: "Defining",
        position: 0,
        cards: [
            new TaskModel({
                _id: new Date().getMilliseconds(),
                name: "Create new Component of Drag and Drop",
                description: "",
                priority: "high",
                tags: ["React", "Frontend"],
            }),
        ],
    },
    {
        name: "ToDo",
        position: 1,
        cards: [],
    },
    {
        name: "Doing",
        position: 2,
        cards: [],
    },
    {
        name: "Test",
        position: 3,
        cards: [],
    },
    {
        name: "QA",
        position: 4,
        cards: [],
    },
    {
        name: "Done",
        position: 5,
        cards: [],
    },
    {
        name: "Uploaded",
        position: 6,
        cards: [],
    },
    {
        name: "Delivered",
        position: 6,
        cards: [],
    },
];
