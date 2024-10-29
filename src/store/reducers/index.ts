import { combineReducers } from "redux";
import tasksReducer from "./taskSlice";

const mainReducer = combineReducers({
    tasksState: tasksReducer,
});

export default mainReducer;
