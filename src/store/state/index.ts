import { StagesConfig } from "../../config/stages.config";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";

export const initialTaskState: StageModel[] = StagesConfig;
export const initialDragState: {
    draggedCard: undefined | TaskModel;
    oldStage: undefined | StageModel;
    newStage: undefined | StageModel;
    oldPosition: undefined | number;
    newPosition: undefined | number;
} = {
    draggedCard: undefined,
    oldStage: undefined,
    newStage: undefined,
    oldPosition: undefined,
    newPosition: undefined,
};
export const initialCreationEditionState: {
    newTask: boolean | undefined;
    task: TaskModel | undefined;
    stage: StageModel | undefined;
} = { newTask: undefined, task: undefined, stage: undefined };
