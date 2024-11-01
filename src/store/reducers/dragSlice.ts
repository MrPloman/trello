import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialDragState } from "../state/taskState";
import { removeDrag, updateDrag } from "../actions/dragActions";

const dragSlice = createSlice({
    name: "dragged",
    initialState: initialDragState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            updateDrag,
            (
                state,
                action: PayloadAction<{
                    draggedCard?: TaskModel;
                    oldStage?: StageModel;
                    newStage?: StageModel;
                    oldPosition?: number;
                    newPosition?: number;
                }>
            ) => {
                console.log(action.payload);
                if (action.payload.newStage) {
                    state.newStage = action.payload.newStage;
                }
            }
        );
        builder.addCase(removeDrag, (state) => {
            state = {
                draggedCard: null,
                oldStage: null,
                newStage: null,
                oldPosition: null,
                newPosition: null,
            };
            return state;
        });
    },
});

export default dragSlice.reducer;
