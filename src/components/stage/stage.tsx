import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";

export const StageComponent = (_props: { stage: StageModel }) => {
    return (
        <div className="stage" id={_props.stage.name.toLowerCase()}>
            <h2>{_props.stage.name}</h2>
            {_props.stage.cards.map((card) => (
                <TaskComponent task={card}></TaskComponent>
            ))}
        </div>
    );
};
