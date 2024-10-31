import { combineReducers } from "redux";
import tasksReducer from "./taskSlice";

const mainReducer = combineReducers({
    tasksState: tasksReducer,
    dragState: null,
});

export default mainReducer;
