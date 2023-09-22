import { createSlice } from "@reduxjs/toolkit";

export const jokeSlice = createSlice({
  name: "mobutu",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    decrementBy:(state, action) => {
      state.value -= action.payload;
    }
  }
})

export const { increment, decrementBy, decrement } = jokeSlice.actions;

export default jokeSlice.reducer;
