import { configureStore } from "@reduxjs/toolkit";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import rootReducer from "./Reducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
