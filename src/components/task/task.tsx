/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskModel } from "../../models/task.model";
import "./task.scss";

export const TaskComponent = (_props: {
    task: TaskModel;
    setDragState: any;
    dragState: {
        draggedStage: null | number;
        draggedPosition: null | number;
        draggedCard: null | TaskModel;
    };
}) => {
    const getNumberOfCheckedTasks = (numberOfTasks: number): number => {
        return numberOfTasks;
    };
    const setNewPositionCard = (task: null | TaskModel) => {
        _props.setDragState({
            draggedCard: task,
            draggedPosition: _props.dragState.draggedPosition,
            draggedStage: _props.dragState.draggedStage,
        });
    };
    return (
        <article
            id={`task_${_props.task._id}`}
            className="task"
            draggable
            onDragEnd={() => setNewPositionCard(_props.task)}
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
