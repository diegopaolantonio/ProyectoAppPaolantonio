import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/slice/counterSlice";
import homeSlice from "./slice/homeSlice";

export default configureStore({
  reducer: { counterReducer, homeSlice },
});
