import { createSlice } from "@reduxjs/toolkit";
// Creating redux slice
export const userSlice = createSlice({
  name: "u",
  initialState: {
    user: {},
  },
  reducers:{
    addUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer; 
