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
    isNew: boolean;
    task: TaskModel | undefined;
    stage: StageModel | undefined;
    currentPosition: number | undefined;
} = { isNew: false, task: undefined, stage: undefined, currentPosition: undefined };
