import { createAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";

const CREATE_TASK = "CREATE_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const REMOVE_TASK = "REMOVE_TASK";

function withPayloadType<T>() {
    return (t: T) => ({ payload: t });
}
export const createTask = createAction(
    CREATE_TASK,
    withPayloadType<{ createdTask: TaskModel; currentStage: StageModel }>()
);

export const updateTask = createAction(
    UPDATE_TASK,
    withPayloadType<{
        updatedTask: TaskModel;
        origin: StageModel;
        destination: StageModel;
        lastPosition: number;
        newPosition: number;
    }>()
);
export const removeTask = createAction(
    REMOVE_TASK,
    withPayloadType<{ removedTask: TaskModel; stageOrigin: StageModel; taskPosition: number }>()
);
