/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { DropSpace } from "../dropSpace/dropSpace";
import { TaskModel } from "../../models/task.model";
import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { updateTask } from "../../store/actions/taskActions";

export const StageComponent = (_props: {
    stage: StageModel;

    setDragState: any;
    dragState: {
        draggedStage: null | StageModel;
        draggedPosition: null | number;
        draggedCard: null | TaskModel;
        originPosition: null | number;
        originStage: null | StageModel;
    };
}) => {
    const dispatch = useAppDispatch();

    const setDraggedCardStagePosition = (stage: StageModel | null) => {
        if (stage) {
            _props.setDragState({
                draggedCard: _props.dragState.draggedCard,
                draggedPosition: _props.dragState.draggedPosition,
                draggedStage: stage,
                originPosition: _props.dragState.originPosition,
                originStage: _props.dragState.originStage,
            });
            if (
                _props.dragState.draggedCard !== null &&
                _props.dragState.originPosition !== null &&
                _props.dragState.originStage !== null &&
                _props.dragState.draggedPosition !== null
            ) {
                console.log({
                    updatedTask: _props.dragState.draggedCard,
                    destination: stage,
                    lastPosition: _props.dragState.originPosition,
                    origin: _props.dragState.originStage,
                    newPosition: _props.dragState.draggedPosition,
                });
                dispatch(
                    updateTask({
                        updatedTask: _props.dragState.draggedCard,
                        destination: stage,
                        lastPosition: _props.dragState.originPosition,
                        origin: _props.dragState.originStage,
                        newPosition: _props.dragState.draggedPosition,
                    })
                );
            }
            // dispatch(
            //     updateTask({
            //         updatedTask: _props.dragState.draggedCard,
            //         destination: stage,
            //         lastPosition: _props.dragState.originPosition,
            //         origin: _props.dragState.originStage,
            //         newPosition: _props.dragState.draggedPosition,
            //     })
            // );
        }
    };
    const dispatchNewFinalPosition = (stage: StageModel) => {
        if (
            _props.dragState.draggedCard !== null &&
            _props.dragState.originPosition !== null &&
            _props.dragState.originStage !== null &&
            _props.dragState.draggedPosition !== null
        ) {
            console.log({
                updatedTask: _props.dragState.draggedCard,
                destination: stage,
                lastPosition: _props.dragState.originPosition,
                origin: _props.dragState.originStage,
                newPosition: _props.dragState.draggedPosition,
            });
            dispatch(
                updateTask({
                    updatedTask: _props.dragState.draggedCard,
                    destination: stage,
                    lastPosition: _props.dragState.originPosition,
                    origin: _props.dragState.originStage,
                    newPosition: _props.dragState.draggedPosition,
                })
            );
        }
    };
    return (
        <div
            className="stage"
            id={_props.stage.name.toLowerCase()}
            onDragOver={() => {
                setDraggedCardStagePosition(_props.stage);
            }}
            onDragEnd={() => dispatchNewFinalPosition(_props.stage)}
        >
            <h2>{_props.stage.name}</h2>
            <DropSpace
                position={0}
                dragState={_props.dragState}
                setDragState={_props.setDragState}
                key={`dropSpace_top_${_props.stage.name.toLowerCase()}`}
            ></DropSpace>

            {_props.stage.cards.map((card, index) => (
                <Fragment key={`fragment_${card._id}`}>
                    <TaskComponent
                        key={card._id}
                        task={card}
                        currentStage={_props.stage}
                        currentPosition={index}
                        setDragState={_props.setDragState}
                        dragState={_props.dragState}
                    ></TaskComponent>
                    <DropSpace
                        position={index}
                        dragState={_props.dragState}
                        setDragState={_props.setDragState}
                        key={`dropSpace_${card._id}`}
                    ></DropSpace>
                </Fragment>
            ))}
        </div>
    );
};
