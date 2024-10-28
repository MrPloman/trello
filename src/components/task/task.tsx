/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskModel } from "../../models/task.model";
import "./task.scss";

export const TaskComponent = (_props: { task: TaskModel; setActiveCard: any }) => {
    const getNumberOfCheckedTasks = (numberOfTasks: number): number => {
        return numberOfTasks;
    };
    return (
        <article
            id={`task_${_props.task._id}`}
            className="task"
            draggable
            onDragStart={() => _props.setActiveCard(_props.task._id)}
            onDragEnd={() => _props.setActiveCard(null)}
        >
            <header>
                <span id="priority" className={`priority-${_props.task.priority}`}>
                    {_props.task.priority}
                </span>
                <h4 id="title"> {_props.task.name}</h4>
                <div id="tags">
                    {_props.task.tags.map((tag, index) => (
                        <span className="tag" key={index}>
                            {tag}
                        </span>
                    ))}
                </div>
            </header>
            <footer>
                <div id="checklist">
                    {_props.task.checkList
                        ? getNumberOfCheckedTasks(_props.task.checkList.length)
                        : 0}
                    / {_props.task.checkList ? _props.task.checkList?.length : null}
                </div>
            </footer>
        </article>
    );
};
