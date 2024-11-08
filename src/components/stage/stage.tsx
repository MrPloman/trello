import { Fragment } from "react/jsx-runtime";
import { StageModel } from "../../models/stage.model";
import { TaskComponent } from "../task/task";
import "./stage.scss";
import { DropSpace } from "../dropSpace/dropSpace";
import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { updateDrag } from "../../store/actions/dragActions";

export const StageComponent = (_props: { stage: StageModel }) => {
    const dispatch = useAppDispatch();
    const getAllPoints = () => {
        return _props.stage.cards.reduce(
            (accumulator, currentValue) => Number(accumulator) + Number(currentValue.points),
            0
        );
    };

    const dispatchNewFinalPosition = (stage: StageModel | undefined) => {
        if (stage) {
            dispatch(updateDrag({ newStage: stage }));
        } else {
            dispatch(updateDrag({ newStage: undefined }));
        }
    };
    return (
        <div
            className="stage"
            id={_props.stage.name.toLowerCase()}
            onDragOver={() => dispatchNewFinalPosition(_props.stage)}
            onDragEnd={() => dispatchNewFinalPosition(undefined)}
        >
            <div id="title">
                <h2>{_props.stage.name}</h2>
                <span> Points: {getAllPoints()}</span>
            </div>
            <DropSpace
                numberOfTasks={_props.stage.cards.length}
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
                    <DropSpace
                        numberOfTasks={_props.stage.cards.length}
                        position={index + 1}
                        key={`dropSpace_${card._id}`}
                    ></DropSpace>
                </Fragment>
            ))}
        </div>
    );
};
