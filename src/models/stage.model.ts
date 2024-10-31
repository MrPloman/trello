import { TaskModel } from "./task.model";

export class StageModel {
    name: string;
    cards: TaskModel[];
    constructor(cards: TaskModel[], name: string) {
        this.name = name;
        this.cards = cards;
    }
}
