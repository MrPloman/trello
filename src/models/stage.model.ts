import { TaskModel } from "./task.model";

export class StageModel {
    name: string;
    position: number;
    cards: TaskModel[];
    constructor(cards: TaskModel[], name: string, position: number) {
        this.name = name;
        this.position = position;
        this.cards = cards;
    }
}
