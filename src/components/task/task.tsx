import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { openCreationEdition } from "../../store/actions/creationEditionActions";
import { updateDrag } from "../../store/actions/dragActions";
import "./task.scss";

export const TaskComponent = (_props: {
    task: TaskModel;
    currentPosition: number;
    currentStage: StageModel;
}) => {
    // const dragState = useAppSelector((state) => state.dragState);

    const dispatch = useAppDispatch();
    const getNumberOfCheckedTasks = (numberOfTasks: number): number => {
        return numberOfTasks;
    };

    const setNewPositionCard = () => {
        dispatch(
            updateDrag({
                draggedCard: _props.task,
                oldPosition: _props.currentPosition,
                oldStage: _props.currentStage,
            })
        );
    };
    return (
        <article
            id={`task_${_props.task._id}`}
            className="task"
            draggable
            onDragStart={() => setNewPositionCard()}
            onClick={() => {
                dispatch(
                    openCreationEdition({
                        isNew: false,
                        task: _props.task,
                        currentPosition: _props.currentPosition,
                        stage: _props.currentStage,
                    })
                );
            }}
        >
            <header>
                <div id="column1">
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
                </div>
            </header>
            <footer>
                <div id="checklist">
                    {_props.task.checkList
                        ? getNumberOfCheckedTasks(_props.task.checkList.length)
                        : 0}
                    / {_props.task.checkList ? _props.task.checkList?.length : undefined}
                </div>
                <div id="users">
                    {_props.task.users ? _props.task.users.map((user) => user) : undefined}
                    <span></span>
                </div>
            </footer>
        </article>
    );
};
