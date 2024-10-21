import { StageModel } from "../models/stage.model";

export const StagesConfig: StageModel[] = [
    {
        name: "Defining",
        position: 0,
        cards: [{ name: "Rapido" }, { name: "Lento" }, { name: "Medio" }],
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
        cards: [
            { name: "Rapido" },
            { name: "Lento" },
            { name: "Medio" },
            { name: "Rapido" },
            { name: "Lento" },
            { name: "Medio" },
            { name: "Rapido" },
            { name: "Lento" },
            { name: "Medio" },
        ],
    },
    {
        name: "Delivered",
        position: 6,
        cards: [],
    },
];
