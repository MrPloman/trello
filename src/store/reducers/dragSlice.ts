import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialDragState, initialTaskState } from "../state/taskState";
import { updateDrag } from "../actions/dragActions";

const dragSlice = createSlice({
    name: "dragged",
    initialState: initialDragState,
    reducers: {
        updateDrag: (
            state,
            action: PayloadAction<{
                draggedCard: TaskModel;
                oldStage: StageModel;
                newStage: StageModel;
                oldPosition: number;
                newPosition: number;
            }>
        ) => {
            state = action.payload;
        },
    },
});

export default dragSlice.reducer;
