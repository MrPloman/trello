import { combineReducers } from "redux";
import tasksReducer from "./taskSlice";
import dragReducer from "./dragSlice";

const mainReducer = combineReducers({
    tasksState: tasksReducer,
    dragState: dragReducer,
});

export default mainReducer;
