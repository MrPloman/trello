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
            new TaskModel({
                _id: new Date().getMilliseconds() + 1,
                name: "Create Other things",
                description: "",
                priority: "medium",
                tags: ["React", "Frontend"],
            }),
            new TaskModel({
                _id: new Date().getMilliseconds() + 2,
                name: "uPDATE",
                description: "",
                priority: "low",
                tags: ["React", "Frontend"],
            }),
        ],
    },
    {
        name: "ToDo",
        position: 1,
        cards: [
            new TaskModel({
                _id: new Date().getMilliseconds() * 4,
                name: "Remove",
                description: "",
                priority: "high",
                tags: [],
            }),
            new TaskModel({
                _id: new Date().getMilliseconds() + 2 * 1,
                name: "Select any problems",
                description: "",
                priority: "medium",
                tags: ["React", "Frontend"],
            }),
            new TaskModel({
                _id: new Date().getMilliseconds() + 3 * 2,
                name: "Delete",
                description: "",
                priority: "low",
                tags: ["React", "Frontend"],
            }),
        ],
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
