import { StageModel } from "../models/stage.model";

export const StagesConfig: StageModel[] = [
    {
        name: "defining",
        cards: [
            {
                _id: 1,
                name: "Create new Component of Drag and Drop",
                description: "",
                priority: "high",
                tags: ["React", "Frontend"],
                points: 1,
                users: ["Pol"],
            },
            {
                _id: 2,
                name: "Create Other things",
                description: "",
                priority: "medium",
                points: 1,

                tags: ["React", "Frontend"],
            },
            {
                _id: 3,
                name: "uPDATE",
                description: "",
                priority: "low",
                points: 1,

                tags: ["React", "Frontend"],
            },
        ],
    },
    {
        name: "todo",
        cards: [
            {
                _id: 4,
                name: "Remove",
                description: "",
                priority: "high",
                points: 1,

                tags: [],
            },
            {
                _id: 5,
                name: "Select any problems",
                description: "",
                priority: "medium",
                points: 1,

                tags: ["React", "Frontend"],
            },
            {
                _id: 6,
                name: "Delete",
                description: "",
                priority: "low",
                points: 1,

                tags: ["React", "Frontend"],
            },
        ],
    },
    {
        name: "doing",
        cards: [],
    },
    {
        name: "test",
        cards: [],
    },
    {
        name: "qa",
        cards: [],
    },
    {
        name: "done",
        cards: [],
    },
    {
        name: "uploaded",
        cards: [],
    },
    {
        name: "approved",
        cards: [],
    },
];
