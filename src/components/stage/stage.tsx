/* eslint-disable @typescript-eslint/no-explicit-any */
import { DndContext } from "@dnd-kit/core";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { useState } from "react";

export const StageComponent = (_props: { stage: StageModel }) => {
    const [isDropped, setIsDropped] = useState(false);
    function handleDragEnd(event: any) {
        if (event.over && event.over.id === "droppable") {
            setIsDropped(true);
        }
    }

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="stage" id={_props.stage.name.toLowerCase()}>
                <h2>{_props.stage.name}</h2>

                {!isDropped
                    ? _props.stage.cards.map((card) => <TaskComponent task={card}></TaskComponent>)
                    : null}
            </div>
        </DndContext>
    );
};
