import { createAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";

const UPDATE_CREATION_EDITION = "UPDATE_CREATION_EDITION";
const CANCEL_CREATION_EDITION = "CANCEL_CREATION_EDITION";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}
export const updateCreationEdition = createAction(
    UPDATE_CREATION_EDITION,
    withPayloadType<{
        draggedCard?: TaskModel;
        oldStage?: StageModel;
        newStage?: StageModel;
        oldPosition?: number;
        newPosition?: number;
    }>()
);
export const cancelCreationEdition = createAction(CANCEL_CREATION_EDITION);
