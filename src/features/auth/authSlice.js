import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./authAPI";

const initialState = {
  value: 0,
  status: 'idle',
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const selectCount = (state) => state.counter.value;