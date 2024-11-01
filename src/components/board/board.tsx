import { StageModel } from "../../models/stage.model";
import { StageComponent } from "../stage/stage";
import "./board.scss";
import { useAppSelector } from "../../hooks/useTasksDispatch";

export const BoardComponent = () => {
    const stages = useAppSelector((state) => state.tasksState);

    return (
        <>
            <div id="board">
                {stages
                    ? stages.map((stage: StageModel, index: number) => (
                          <StageComponent key={index} stage={stage}></StageComponent>
                      ))
                    : null}
            </div>
        </>
    );
};
