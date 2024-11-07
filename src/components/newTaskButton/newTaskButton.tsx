import { useAppDispatch } from "../../hooks/useTasksDispatch";
import { openCreationEdition } from "../../store/actions/creationEditionActions";
import "./newTaskButton.scss";

export const NewTaskButton = () => {
    const dispatch = useAppDispatch();

    return (
        <>
            <button
                className="button_plus"
                onClick={() =>
                    dispatch(
                        openCreationEdition({
                            isNew: true,
                            stage: undefined,
                            task: undefined,
                            currentPosition: 0,
                        })
                    )
                }
            ></button>
        </>
    );
};
