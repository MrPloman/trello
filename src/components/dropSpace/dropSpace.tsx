import { useState } from "react";
import "./dropSpace.scss";
import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { updateDrag } from "../../store/actions/dragActions";

export const DropSpace = (_props: { position: number }) => {
    const [showDropSpace, setShowDropSpace] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const showSpace = (show: boolean) => {
        setShowDropSpace(show);
    };
    const lastLocation = (position: number | undefined) => {
        console.log(position);
        if (position !== undefined) {
            dispatch(updateDrag({ newPosition: position }));
            // _props.setDragState({
            //     draggedCard: _props.dragState.draggedCard,
            //     draggedStage: _props.dragState.draggedStage,
            //     draggedPosition: _props.position,
            //     originPosition: _props.dragState.originPosition,
            //     originStage: _props.dragState.originStage,
            // });
        } else {
            // _props.setDragState({
            //     draggedCard: _props.dragState.draggedCard,
            //     draggedStage: _props.dragState.draggedStage,
            //     draggedPosition: undefined,
            // });
        }
    };

    return (
        <section
            onDragEnter={() => {
                showSpace(true);
            }}
            onDragLeave={() => {
                showSpace(false);
            }}
            onDragOver={() => lastLocation(_props.position)}
            className={showDropSpace ? "show_space" : "hide_space"}
        ></section>
    );
};
