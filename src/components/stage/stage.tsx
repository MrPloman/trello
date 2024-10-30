/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react/jsx-runtime";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { DropSpace } from "../dropSpace/dropSpace";
import { TaskModel } from "../../models/task.model";

export const StageComponent = (_props: {
    stage: StageModel;
    setActiveCard: any;
    setDragState: any;
    dragState: {
        draggedStage: null | number;
        draggedPosition: null | number;
        draggedCard: null | TaskModel;
    };
}) => {
    const setDraggedCardStagePosition = (stage: StageModel | null) => {
        if (stage) {
            _props.setDragState({
                draggedCard: _props.dragState.draggedCard,
                draggedPosition: _props.dragState.draggedPosition,
                draggedStage: stage.position,
            });
        }
        // } else {
        //     _props.setDragState({
        //         draggedCard: _props.dragState.draggedCard,
        //         draggedPosition: _props.dragState.draggedPosition,
        //         draggedStage: null,
        //     });
        // }
    };
    return (
        <div
            className="stage"
            id={_props.stage.name.toLowerCase()}
            onDragEnter={() => {
                setDraggedCardStagePosition(_props.stage);
            }}
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
