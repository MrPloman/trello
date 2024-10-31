import { useState } from "react";
import { StageModel } from "../../models/stage.model";
import { StageComponent } from "../stage/stage";
import "./board.scss";
import { useAppSelector } from "../../hooks/useTasksDispatch";
import { TaskModel } from "../../models/task.model";

export const BoardComponent = () => {
    const stages = useAppSelector((state) => state.tasksState);

    const [dragState, setDragState] = useState<{
        draggedCard: null | TaskModel;
        draggedStage: null | StageModel;
        draggedPosition: null | number;
        originPosition: null | number;
        originStage: null | StageModel;
    }>({
        draggedCard: null,
        draggedStage: null,
        draggedPosition: null,
        originPosition: null,
        originStage: null,
    });

    return (
        <>
            <div id="board">
                {stages
                    ? stages.map((stage: StageModel, index: number) => (
                          <StageComponent
                              key={index}
                              stage={stage}
                              setDragState={setDragState}
                              dragState={dragState}
                          ></StageComponent>
                      ))
                    : null}
            </div>
        </>
    );
};
