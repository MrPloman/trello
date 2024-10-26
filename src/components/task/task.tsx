import { DndContext } from "@dnd-kit/core";
import { TaskModel } from "../../models/task.model";
import "./task.scss";

export const TaskComponent = (_props: { task: TaskModel }) => {
    return (
        <DndContext>
            <div className="task" id={_props.task.name}>
                <h4> {_props.task.name}</h4>
            </div>
        </DndContext>
    );
};
