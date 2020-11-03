import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const sleep = (num) => {
  return new Promise((resolve) => {
    setTimeout(resolve, num);
  });
};
// First, create the thunk
export const fetchUserById = createAsyncThunk(
  "counter/fetchByIdStatus",
  async (_, thunkAPI) => {
    console.log("thunkAPI", thunkAPI);
    await sleep(1000);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    throw new Error("eror");
    return response.data;
  }
);

// 초기화
export const initialState = {
  count: 0,
  data: null,
  status: null,
};

// 스토어
export const countReducer = createSlice({
  initialState,
  name: "counter",
  reducers: {
    addCount: (state) => {
      state.count++;
    },
    setData: (state, action) => {
      console.log(action);
      state.data = action.payload;
    },
    setDataAsync: (state, action) => {
      state.status = "async";
    },
  },
  extraReducers: {
    [fetchUserById.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "success";
    },
    [fetchUserById.rejected]: (state, action) => {
      state.status = "rejected";
    },
    [fetchUserById.pending]: (state, action) => {
      state.status = "pending";
    },
  },
});
