import { useState } from "react";
import "./dropSpace.scss";

export const DropSpace = (_props: { position: number }) => {
    const [showDropSpace, setShowDropSpace] = useState<boolean>(false);
    const lastLocation = (position: number | null) => {
        if (position !== null) {
            setShowDropSpace(true);
            // _props.setDragState({
            //     draggedCard: _props.dragState.draggedCard,
            //     draggedStage: _props.dragState.draggedStage,
            //     draggedPosition: _props.position,
            //     originPosition: _props.dragState.originPosition,
            //     originStage: _props.dragState.originStage,
            // });
        } else {
            setShowDropSpace(false);
            // _props.setDragState({
            //     draggedCard: _props.dragState.draggedCard,
            //     draggedStage: _props.dragState.draggedStage,
            //     draggedPosition: null,
            // });
        }
    };

    return (
        <section
            onDragEnter={() => {
                lastLocation(_props.position);
            }}
            onDragLeave={() => {
                lastLocation(null);
            }}
            onDragEndCapture={() => lastLocation(_props.position)}
            className={showDropSpace ? "show_space" : "hide_space"}
        ></section>
    );
};
