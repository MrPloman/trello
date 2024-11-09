import "./modal.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useTasksDispatch";
import { cancelCreationEdition } from "../../store/actions/creationEditionActions";
import { useEffect, useState } from "react";
import { removeTask, updateTask, createTask } from "../../store/actions/taskActions";
import { StagesConfig } from "../../config/stages.config";

export const ModalComponent = () => {
    const creationEditionState = useAppSelector((state) => state.creationEditionState);
    const [autofocus, setAutoFocus] = useState(false);
    const [formTaskState, setFormTaskState] = useState({
        name: creationEditionState.task?.name,
        description: creationEditionState.task?.description,
        stage: creationEditionState.stage?.name,
        priority: creationEditionState.task?.priority,
        points: creationEditionState.task?.points,
        checklist: creationEditionState.task?.checkList,
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
            checklist: creationEditionState.task?.checkList
                ? creationEditionState.task?.checkList
                : [],
        });
    }, [creationEditionState]);
    const dispatch = useAppDispatch();

    const deleteChecklistElement = (position: number) => {
        if (formTaskState.checklist && position !== undefined) {
            setAutoFocus(false);
            const checkList = formTaskState.checklist.filter((element, index) => {
                if (position !== index) return element;
            });
            // const index = formTaskState.checklist.findIndex((x, index) => index === position);
            // console.log(index);
            // const checkList = formTaskState.checklist.slice(index, 1);
            // console.log(checkList);
            setFormTaskState((lastState) => ({
                ...lastState,
                checklist: checkList,
            }));
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

    const addCheckbox = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();
        if (formTaskState && formTaskState.checklist) {
            const newCheck = { name: "", checked: false };
            const newCheckList = [newCheck, ...formTaskState.checklist];
            setFormTaskState((lastState) => ({
                ...lastState,
                checklist: newCheckList,
            }));
        }
    };

    const handleCheckboxNameFormUpdate = (e: { target: { value: string } }, position: number) => {
        const { value } = e.target;
        setAutoFocus(true);
        const checklist = formTaskState?.checklist?.map((element, index) => {
            if (index === position) element = { ...element, name: value };
            return element;
        });
        setFormTaskState((lastState) => ({
            ...lastState,
            checklist,
        }));
    };

    const handleCheckboxFormUpdate = (
        e: { target: { value: boolean; name: string } },
        position: number
    ) => {
        console.log(position);
        const { value, name } = e.target;
        console.log(name);
        const checklist = formTaskState?.checklist?.map((element, index) => {
            if (index === position) element = { name: e.target.name, checked: value };
            return element;
        });
        setFormTaskState((lastState) => ({
            ...lastState,
            checklist,
        }));
    };

    const updateTaskForm = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();
        setAutoFocus(false);

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
                            checkList: formTaskState.checklist,
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
    const createTaskForm = (e: React.MouseEvent<unknown>) => {
        e.preventDefault();
        setAutoFocus(false);

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
                            checkList: formTaskState.checklist,
                            tags: [],
                        },
                        currentStage: stage,
                    })
                );
                cancelForm();
            }
        }
    };
    const cancelForm = () => {
        setAutoFocus(false);

        setFormTaskState({
            name: "",
            description: "",
            stage: "",
            priority: undefined,
            points: undefined,
            checklist: [],
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
                                        placeholder="Write description's task..."
                                        name="description"
                                        id="descriptionInput"
                                        value={formTaskState.description}
                                        onChange={handleFormUpdate}
                                    />
                                </div>
                                <div id="checklist">
                                    <div id="titleChecklist">
                                        <h3>Checklist</h3>
                                        <button
                                            onClick={($event) => {
                                                addCheckbox($event);
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                    <ul>
                                        {formTaskState.checklist?.map((step, position) => {
                                            return (
                                                <span key={position} className="taskCheckbox">
                                                    <span className="inputCheckbox">
                                                        <input
                                                            className="inputValueCheckbox"
                                                            onChange={($event) =>
                                                                handleCheckboxFormUpdate(
                                                                    {
                                                                        target: {
                                                                            name: step.name,
                                                                            value: $event.target
                                                                                .checked,
                                                                        },
                                                                    },
                                                                    position
                                                                )
                                                            }
                                                            key={step.name + "Checkbox"}
                                                            type="checkbox"
                                                            defaultChecked={step.checked}
                                                        />
                                                        <input
                                                            name={step.name}
                                                            autoFocus={autofocus}
                                                            className="inputTextCheckbox"
                                                            onChange={($event) =>
                                                                handleCheckboxNameFormUpdate(
                                                                    {
                                                                        target: {
                                                                            value: $event.target
                                                                                .value,
                                                                        },
                                                                    },
                                                                    position
                                                                )
                                                            }
                                                            type="text"
                                                            placeholder="Write check name..."
                                                            value={step.name}
                                                            key={step.name + "Input"}
                                                        />
                                                    </span>
                                                    <span
                                                        className="deleteCheckbox"
                                                        onClick={() => {
                                                            deleteChecklistElement(position);
                                                        }}
                                                    >
                                                        X
                                                    </span>
                                                </span>
                                            );
                                        })}
                                    </ul>
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
