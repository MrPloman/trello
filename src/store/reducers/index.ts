import { combineReducers } from "redux";
import tasksReducer from "./taskSlice";

const mainReducer = combineReducers({
    tasksReducer,
});

export default mainReducer;
