import { combineReducers } from "redux";
import tasksReducer from "./taskSlice";
import dragReducer from "./dragSlice";
import creationEditionReducer from "./creationEditionSlice";

const mainReducer = combineReducers({
    tasksState: tasksReducer,
    dragState: dragReducer,
    creationEditionState: creationEditionReducer,
});

export default mainReducer;
