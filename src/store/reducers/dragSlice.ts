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
                if (action.payload.draggedCard) state.draggedCard = action.payload.draggedCard;
                if (action.payload.oldStage) state.oldStage = action.payload.oldStage;
                if (action.payload.newStage) state.newStage = action.payload.newStage;
                if (action.payload.oldPosition) state.oldPosition = action.payload.oldPosition;
                if (action.payload.newPosition) state.newPosition = action.payload.newPosition;
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
