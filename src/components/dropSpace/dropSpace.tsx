import { useState } from "react";
import "./dropSpace.scss";
import { useAppDispatch, useAppSelector } from "../../hooks/useTasksDispatch";
import { updateDrag } from "../../store/actions/dragActions";
import { updateTask } from "../../store/actions/taskActions";

export const DropSpace = (_props: { position: number; numberOfTasks: number }) => {
    const [showDropSpace, setShowDropSpace] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const dragState = useAppSelector((state) => state.dragState);

    const setNewCardPosition = () => {
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
        if (position !== undefined) {
            dispatch(updateDrag({ newPosition: position }));
        }
    };

    return (
        <section
            onDragEnter={() => showSpace(true)}
            onDragLeave={() => {
                setTimeout(() => {
                    showSpace(false);
                }, 1000);
            }}
            onDragOver={(e) => {
                showSpace(true);
                e.preventDefault();
                lastLocation(_props.position);
            }}
            onDrop={() => {
                showSpace(false);
                setNewCardPosition();
            }}
            className={`${showDropSpace ? "show_space" : "hide_space"} ${
                _props.numberOfTasks === 0 ? "notasks" : "normal"
            }`}
        ></section>
    );
};
