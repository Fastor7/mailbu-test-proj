import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../screens/Home/HomeSlice";
export const store = configureStore({
  reducer: {
    home: homeReducer,
  },
  devTools: true,
});
