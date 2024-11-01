import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialTaskState } from "../state/taskState";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialTaskState,
    reducers: {
        createTask: (
            state,
            action: PayloadAction<{ createdTask: TaskModel; currentStage: StageModel }>
        ) => {
            const newTask = action.payload.createdTask;
            const { name } = action.payload.currentStage;
            state.forEach((stage) => {
                if (stage.name === name) {
                    stage.cards = [...stage.cards, newTask];
                }
            });
        },
        updateTask: (
            state,
            action: PayloadAction<{
                updatedTask: TaskModel;
                origin: StageModel;
                destination: StageModel;
                lastPosition: number;
                newPosition: number;
            }>
        ) => {
            const task = action.payload.updatedTask;
            const newPosition = action.payload.newPosition;
            const lastPosition = action.payload.newPosition;
            const destinationName = action.payload.destination.name;
            const originName = action.payload.origin.name;
            state.forEach((stage) => {
                if (stage.name === destinationName) {
                    stage.cards.splice(newPosition, 0, task);
                }
                if (stage.name === originName) {
                    stage.cards.splice(lastPosition, 1);
                }
            });
        },
    },
});

export default tasksSlice.reducer;
