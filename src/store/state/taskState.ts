import { StagesConfig } from "../../config/stages.config";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";

export const initialTaskState: StageModel[] = StagesConfig;
export const initialDragState: {
    draggedCard: null | TaskModel;
    oldStage: null | StageModel;
    newStage: null | StageModel;
    oldPosition: null | number;
    newPosition: null | number;
} = {
    draggedCard: null,
    oldStage: null,
    newStage: null,
    oldPosition: null,
    newPosition: null,
};
