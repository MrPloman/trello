import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialCreationEditionState } from "../state";
import { cancelCreationEdition, openCreationEdition } from "../actions/creationEditionActions";

const creationEditionSlice = createSlice({
    name: "creationEdition",
    initialState: initialCreationEditionState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            openCreationEdition,
            (
                state,
                action: PayloadAction<{
                    isNew: boolean;
                    task?: TaskModel;
                    stage?: StageModel;
                    currentPosition?: number;
                }>
            ) => {
                state = {
                    isNew: action.payload.isNew,
                    task: action.payload.task,
                    stage: action.payload.stage,
                    currentPosition: action.payload.currentPosition,
                };
            }
        );

        builder.addCase(cancelCreationEdition, (state) => {
            state = {
                isNew: true,
                task: undefined,
                stage: undefined,
                currentPosition: undefined,
            };
            return state;
        });
    },
});

export default creationEditionSlice.reducer;
