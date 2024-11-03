import React from "react";
import "./modal.scss";
import { TaskModel } from "../../models/task.model";

export const ModalComponent = (_props: { task: TaskModel }) => {
    return (
        <div id="background">
            <div id="modal">
                <header>
                    <h2>{_props.task.name}</h2>
                    <span>X</span>
                </header>
            </div>
        </div>
    );
};
