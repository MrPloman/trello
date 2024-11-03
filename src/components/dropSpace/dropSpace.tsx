import { useState } from "react";
import "./dropSpace.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useTasksDispatch";
import { updateDrag } from "../../store/actions/dragActions";
import { updateTask } from "../../store/actions/taskActions";

export const DropSpace = (_props: { position: number }) => {
    const [showDropSpace, setShowDropSpace] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const dragState = useAppSelector((state) => state.dragState);

    const setNewCardPosition = () => {
        console.log(dragState);

        if (
            dragState &&
            dragState.draggedCard &&
            dragState.newPosition !== undefined &&
            dragState.oldPosition !== undefined &&
            dragState.newStage &&
            dragState.oldStage
        ) {
            dispatch(
                updateTask({
                    updatedTask: dragState.draggedCard,
                    origin: dragState.oldStage,
                    destination: dragState.newStage,
                    lastPosition: dragState.oldPosition,
                    newPosition: dragState.newPosition,
                })
            );
            setShowDropSpace(false);
        }
    };

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
            onDragOver={(e) => {
                e.preventDefault();
                lastLocation(_props.position);
            }}
            onDrop={() => {
                setNewCardPosition();
            }}
            className={showDropSpace ? "show_space" : "hide_space"}
        ></section>
    );
};
