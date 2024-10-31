/* eslint-disable @typescript-eslint/no-explicit-any */
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import "./task.scss";

export const TaskComponent = (_props: {
    task: TaskModel;
    currentPosition: number;
    currentStage: StageModel;
    setDragState: any;
    dragState: {
        draggedStage: null | StageModel;
        draggedPosition: null | number;
        draggedCard: null | TaskModel;
        originPosition: null | number;
        originStage: null | StageModel;
    };
}) => {
    const getNumberOfCheckedTasks = (numberOfTasks: number): number => {
        return numberOfTasks;
    };
    const setNewPositionCard = () => {
        _props.setDragState({
            draggedCard: _props.task,
            draggedPosition: _props.dragState.draggedPosition,
            draggedStage: _props.dragState.draggedStage,
            originPosition: _props.currentPosition,
            originStage: _props.currentStage,
        });
    };
    return (
        <article
            id={`task_${_props.task._id}`}
            className="task"
            draggable
            onDragStart={() => setNewPositionCard()}
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
