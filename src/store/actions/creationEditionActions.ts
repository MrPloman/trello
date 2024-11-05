import { createAction } from "@reduxjs/toolkit";
import { TaskModel } from "../../models/task.model";
import { StageModel } from "../../models/stage.model";

const OPEN_CREATION_EDITION = "OPEN_CREATION_EDITION";
const UPDATE_CREATION_EDITION = "UPDATE_CREATION_EDITION";

const CANCEL_CREATION_EDITION = "CANCEL_CREATION_EDITION";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}
export const openCreationEdition = createAction(
    OPEN_CREATION_EDITION,
    withPayloadType<{
        isNew: boolean;
        task?: TaskModel;
        stage?: StageModel;
        currentPosition?: number;
    }>()
);
export const updateCreationEdition = createAction(
    UPDATE_CREATION_EDITION,
    withPayloadType<{
        isNew: boolean;
        task: TaskModel;
        stage?: StageModel;
        currentPosition?: StageModel;
    }>()
);
export const cancelCreationEdition = createAction(CANCEL_CREATION_EDITION);
