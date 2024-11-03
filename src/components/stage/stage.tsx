import { Fragment } from "react/jsx-runtime";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { DropSpace } from "../dropSpace/dropSpace";
import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { updateDrag } from "../../store/actions/dragActions";

export const StageComponent = (_props: { stage: StageModel }) => {
    const dispatch = useAppDispatch();

    // const setDraggedCardStagePosition = (stage: StageModel | undefined) => {
    //     if (stage) {
    //         dispatch(updateDrag({ newStage: stage }));
    //     }
    // };
    const dispatchNewFinalPosition = (stage: StageModel | undefined) => {
        if (stage) {
            dispatch(updateDrag({ newStage: stage }));
        } else {
            dispatch(updateDrag({ newStage: undefined }));
        }

        // if (
        //     _props.dragState.draggedCard !== undefined &&
        //     _props.dragState.originPosition !== undefined &&
        //     _props.dragState.originStage !== undefined &&
        //     _props.dragState.draggedPosition !== undefined
        // ) {
        //     console.log({
        //         updatedTask: _props.dragState.draggedCard,
        //         destination: stage,
        //         lastPosition: _props.dragState.originPosition,
        //         origin: _props.dragState.originStage,
        //         newPosition: _props.dragState.draggedPosition,
        //     });
        //     dispatch(
        //         updateTask({
        //             updatedTask: _props.dragState.draggedCard,
        //             destination: stage,
        //             lastPosition: _props.dragState.originPosition,
        //             origin: _props.dragState.originStage,
        //             newPosition: _props.dragState.draggedPosition,
        //         })
        //     );
        // }
    };
    return (
        <div
            className="stage"
            id={_props.stage.name.toLowerCase()}
            onDragOver={() => dispatchNewFinalPosition(_props.stage)}
            onDragEnd={() => dispatchNewFinalPosition(undefined)}
        >
            <h2>{_props.stage.name}</h2>
            <DropSpace
                position={0}
                key={`dropSpace_top_${_props.stage.name.toLowerCase()}`}
            ></DropSpace>

            {_props.stage.cards.map((card, index) => (
                <Fragment key={`fragment_${card._id}`}>
                    <TaskComponent
                        key={card._id}
                        task={card}
                        currentStage={_props.stage}
                        currentPosition={index}
                    ></TaskComponent>
                    <DropSpace position={index + 1} key={`dropSpace_${card._id}`}></DropSpace>
                </Fragment>
            ))}
        </div>
    );
};
