import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StageModel } from "../../models/stage.model";
import { TaskModel } from "../../models/task.model";
import { initialTaskState } from "../state/taskState";

const tasksSlice = createSlice({
    name: "board",
    initialState: initialTaskState,
    reducers: {
        createTask: (
            state,
            action: PayloadAction<{ createdTask: TaskModel; currentStage: StageModel }>
        ) => {
            const { _id, name } = action.payload.createdTask;
        },
    },
});

// const tasksSlice = createReducer(initialState, (builder) => {
//     builder.addCase(
//         actions.taskActions.createTask,
//         (
//             state: Store<StageModel[]>,
//             action: PayloadAction<{ createdTask: TaskModel; currentStage: StageModel }>
//         ) => {
//             return state;
//         }
//     );
// });

export default tasksSlice.reducer;
