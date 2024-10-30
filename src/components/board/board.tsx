import { useEffect, useState } from "react";
import { StageModel } from "../../models/stage.model";
import { StageComponent } from "../stage/stage";
import "./board.scss";
import { useAppSelector } from "../../hooks/useTasksDispatch";
import { TaskModel } from "../../models/task.model";

export const BoardComponent = () => {
    const stages = useAppSelector((state) => state.tasksState);
    const [dragState, setDragState] = useState<{
        draggedStage: null | number;
        draggedPosition: null | number;
        draggedCard: null | TaskModel;
    }>({
        draggedStage: null,
        draggedPosition: null,
        draggedCard: null,
    });
    const [activeCard, setActiveCard] = useState<number | null>(null);
    useEffect(() => {
        console.log(dragState);
    }, [dragState]);

    return (
        <>
            <div id="board">
                {stages.map((stage: StageModel, index: number) => (
                    <StageComponent
                        key={index}
                        stage={stage}
                        setActiveCard={setActiveCard}
                        setDragState={setDragState}
                        dragState={dragState}
                    ></StageComponent>
                ))}
            </div>
            <header>
                <h4>{activeCard}</h4>
            </header>
        </>
    );
};
