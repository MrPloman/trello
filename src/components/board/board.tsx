import { useState } from "react";
import { StagesConfig } from "../../config/stages.config";
import { StageModel } from "../../models/stage.model";
import { StageComponent } from "../stage/stage";
import "./board.scss";

export const BoardComponent = () => {
    const stages = StagesConfig;
    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <>
            <div id="board">
                {stages.map((stage: StageModel, index: number) => (
                    <StageComponent
                        key={index}
                        stage={stage}
                        setActiveCard={setActiveCard}
                    ></StageComponent>
                ))}
            </div>
            <header>
                <h4>{activeCard}</h4>
            </header>
        </>
    );
};
