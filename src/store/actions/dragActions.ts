import { createAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";

const UPDATE_DRAG = "UPDATE_DRAG";
const REMOVE_DRAG = "REMOVE_DRAG";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}
export const updateDrag = createAction(
    UPDATE_DRAG,
    withPayloadType<{
        draggedCard?: TaskModel;
        oldStage?: StageModel;
        newStage?: StageModel;
        oldPosition?: number;
        newPosition?: number;
    }>()
);
export const removeDrag = createAction(REMOVE_DRAG);
