/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { DropSpace } from "../dropSpace/dropSpace";

export const StageComponent = (_props: { stage: StageModel; setActiveCard: any }) => {
    return (
        <div className="stage" id={_props.stage.name.toLowerCase()}>
            <h2>{_props.stage.name}</h2>
            <DropSpace key={`dropSpace_top_${_props.stage.name.toLowerCase()}`}></DropSpace>

            {_props.stage.cards.map((card) => (
                <Fragment key={`fragment_${card._id}`}>
                    <TaskComponent
                        key={card._id}
                        setActiveCard={_props.setActiveCard}
                        task={card}
                    ></TaskComponent>
                    <DropSpace key={`dropSpace_${card._id}`}></DropSpace>
                </Fragment>
            ))}
        </div>
    );
};
