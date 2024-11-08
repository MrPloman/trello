import "./modal.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useTasksDispatch";
import { cancelCreationEdition } from "../../store/actions/creationEditionActions";
import { useEffect, useState } from "react";
import { removeTask, updateTask, createTask } from "../../store/actions/taskActions";
import { StagesConfig } from "../../config/stages.config";

export const ModalComponent = () => {
    const creationEditionState = useAppSelector((state) => state.creationEditionState);
    const [formTaskState, setFormTaskState] = useState({
        name: creationEditionState.task?.name,
        description: creationEditionState.task?.description,
        stage: creationEditionState.stage?.name,
        priority: creationEditionState.task?.priority,
        points: creationEditionState.task?.points,
    });
    useEffect(() => {
        setFormTaskState({
            name: creationEditionState.task ? creationEditionState.task.name : "",
            description: creationEditionState.task ? creationEditionState.task.description : "",
            stage: creationEditionState.task ? creationEditionState.stage?.name : "",
            priority: creationEditionState.task?.priority
                ? creationEditionState.task?.priority
                : undefined,
            points: creationEditionState.task?.points
                ? creationEditionState.task?.points
                : undefined,
        });
    }, [creationEditionState]);
    const dispatch = useAppDispatch();

    const createTaskForm = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();
        if (
            formTaskState.name &&
            formTaskState.priority &&
            formTaskState.stage &&
            formTaskState.points
        ) {
            const stage = StagesConfig.find((stage) => {
                if (stage.name === formTaskState.stage) {
                    return stage;
                }
            });
            if (stage) {
                dispatch(
                    createTask({
                        createdTask: {
                            _id: new Date().getMilliseconds(),
                            name: formTaskState.name,
                            description: formTaskState.description ? formTaskState.description : "",
                            priority: formTaskState.priority,
                            points: formTaskState.points,
                            tags: [],
                        },
                        currentStage: stage,
                    })
                );
                cancelForm();
            }
        }
    };

    const deleteTask = () => {
        cancelForm();
        if (creationEditionState.stage && creationEditionState.currentPosition !== undefined) {
            dispatch(
                removeTask({
                    taskPosition: creationEditionState.currentPosition,
                    stage: creationEditionState.stage,
                })
            );
        }
    };

    const handleFormUpdate = (e: { target: { value: string; name: string } }) => {
        const { value, name } = e.target;
        setFormTaskState((lastState) => ({
            ...lastState,
            [name]: value,
        }));
    };

    const updateTaskForm = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();
        if (
            formTaskState.name &&
            formTaskState.priority &&
            formTaskState.stage &&
            formTaskState.points &&
            creationEditionState.stage &&
            creationEditionState.task &&
            creationEditionState.currentPosition !== undefined
        ) {
            const stage = StagesConfig.find((stage) => {
                if (stage.name === formTaskState.stage) {
                    return stage;
                }
            });
            if (stage) {
                dispatch(
                    updateTask({
                        updatedTask: {
                            ...creationEditionState.task,
                            name: formTaskState.name,
                            description: formTaskState.description ? formTaskState.description : "",
                            priority: formTaskState.priority,
                            points: formTaskState.points,
                        },
                        origin: creationEditionState.stage,
                        destination: stage,
                        newPosition: 0,
                        lastPosition: creationEditionState.currentPosition,
                    })
                );
                cancelForm();
            }
        }
    };
    const cancelForm = () => {
        setFormTaskState({
            name: "",
            description: "",
            stage: "",
            priority: undefined,
            points: undefined,
        });
        dispatch(cancelCreationEdition());
    };

    return (
        <>
            {creationEditionState.isNew !== undefined ? (
                <>
                    <div
                        id="background"
                        onClick={() => {
                            cancelForm();
                        }}
                    ></div>
                    <article id="modal">
                        <form id="formTask" action="submit">
                            <header>
                                <h2>
                                    <label htmlFor="name"> Task Name </label>
                                    <input
                                        value={formTaskState.name}
                                        onChange={handleFormUpdate}
                                        type="text"
                                        name="name"
                                    />
                                </h2>
                                <button
                                    type="reset"
                                    onClick={() => {
                                        cancelForm();
                                    }}
                                >
                                    X
                                </button>
                            </header>
                            <div id="mainInformation">
                                <div id="inputDescription">
                                    <label htmlFor="description"> Description </label>
                                    <textarea
                                        name="description"
                                        id="descriptionInput"
                                        value={formTaskState.description}
                                        onChange={handleFormUpdate}
                                    />
                                </div>
                                <div id="inputSelectors">
                                    <div className="selector">
                                        <label htmlFor="stage">Stage</label>
                                        <select
                                            name="stage"
                                            id="stageSelector"
                                            value={formTaskState.stage}
                                            onChange={handleFormUpdate}
                                        >
                                            <option value="" disabled>
                                                Select something
                                            </option>
                                            <option value="defining">Defining </option>
                                            <option value="todo">ToDo </option>
                                            <option value="doing">Doing </option>
                                            <option value="qa">QA </option>
                                            <option value="test">Test </option>
                                            <option value="done">Done </option>
                                            <option value="uploaded">Uploaded </option>
                                            <option value="approved">Approved </option>
                                        </select>
                                    </div>
                                    <div className="selector">
                                        <label htmlFor="points">Points</label>
                                        <select
                                            name="points"
                                            id="pointsSelector"
                                            value={formTaskState.points}
                                            onChange={handleFormUpdate}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="0.5">0.5</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="5">5</option>
                                            <option value="8">8</option>
                                            <option value="13">13</option>
                                            <option value="21">21</option>
                                            <option value="34">34</option>
                                            <option value="55">55</option>
                                            <option value="100">100</option>
                                        </select>
                                    </div>
                                    <div className="selector">
                                        <label htmlFor="priority">Priority</label>
                                        <select
                                            name="priority"
                                            id="prioritySelector"
                                            value={formTaskState.priority}
                                            onChange={handleFormUpdate}
                                        >
                                            <option value="">Select an option</option>
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                            <option value="critical">Critical</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <footer>
                                {!creationEditionState.isNew ? (
                                    <button
                                        type="reset"
                                        onClick={() => {
                                            deleteTask();
                                        }}
                                    >
                                        Delete
                                    </button>
                                ) : null}

                                {creationEditionState.isNew ? (
                                    <button onClick={($event) => createTaskForm($event)}>
                                        Create
                                    </button>
                                ) : (
                                    <button onClick={($event) => updateTaskForm($event)}>
                                        Update
                                    </button>
                                )}
                            </footer>
                        </form>
                    </article>
                </>
            ) : null}
        </>
    );
};
