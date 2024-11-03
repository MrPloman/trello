import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialTaskState } from "../state";
import { createTask, removeTask, updateTask } from "../actions/taskActions";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: initialTaskState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            createTask,
            (
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
            }
        );
        builder.addCase(
            updateTask,
            (
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
                const lastPosition = action.payload.lastPosition;
                const destinationName = action.payload.destination.name;
                const originName = action.payload.origin.name;
                state.forEach((stage) => {
                    // if (destinationName === originName) {
                    //     stage.cards = stage.cards.filter((card, index) => {
                    //         if (index !== lastPosition) return card;
                    //     });
                    //     stage.cards.splice(newPosition, 0, task);
                    // } else {

                    if (stage.name === originName) {
                        stage.cards = stage.cards.filter((card, index) => {
                            if (index !== lastPosition) return card;
                        });
                    }
                    if (stage.name === destinationName) {
                        stage.cards.splice(newPosition, 0, task);
                        //     }
                    }
                });
            }
        );
        builder.addCase(
            removeTask,
            (state, action: PayloadAction<{ taskPosition: number; stage: StageModel }>) => {
                state.forEach((stageArray) => {
                    if (action.payload.stage.name === stageArray.name) {
                        stageArray.cards = stageArray.cards.filter((card, index) => {
                            if (index !== action.payload.taskPosition) return card;
                        });
                    }
                });
            }
        );
    },
});

export default tasksSlice.reducer;
