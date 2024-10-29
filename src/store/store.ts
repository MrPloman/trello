import mainReducer from "./reducers/index";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: mainReducer });

export default store;
