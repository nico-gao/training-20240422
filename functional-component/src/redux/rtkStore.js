import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slice/CounterSlice.ts";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
