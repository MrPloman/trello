import { TaskModel } from "../../models/task.model";
import "./task.scss";

export const TaskComponent = (_props: { task: TaskModel }) => {
    return (
        <div className="task" id={_props.task.name}>
            <h4> {_props.task.name}</h4>
        </div>
    );
};
