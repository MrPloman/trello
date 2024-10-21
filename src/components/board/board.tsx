import { StagesConfig } from "../../config/stages.config";
import { StageModel } from "../../models/stage.model";
import { StageComponent } from "../stage/stage";
import "./board.scss";

export const BoardComponent = () => {
    const stages = StagesConfig;
    return (
        <div id="board">
            {stages.map((stage: StageModel, index: number) => (
                <StageComponent key={index} stage={stage}></StageComponent>
            ))}
        </div>
    );
};
