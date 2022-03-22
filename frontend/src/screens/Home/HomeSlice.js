import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const request = createAsyncThunk("home/request", async () => {
  const response = await axios.get("http://localhost:8080/home/news");
  return response.data;
});

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    data: [],
    status: null,
  },
  reducers: {
    resetstate: (state) => {
      state.data = [];
      state.status = null;
    },
  },
  extraReducers: {
    [request.pending]: (state) => {
      state.status = "loading";
    },
    [request.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.data = payload;
    },
    [request.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export const { resetstate } = HomeSlice.actions;
export default HomeSlice.reducer;
