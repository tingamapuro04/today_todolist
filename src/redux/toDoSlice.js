import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    todos : [],
  },
  reducers: {
    // add todo
    addToDo: (state, action) => {
      state.todos.push(action.payload);
    },
    // delete todo 
    deleteToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    // update todo 
    updateToDo: (state, action) => {
      const { toDo, todo_index } = action.payload;
      const updated = [...state.todos];
      updated[todo_index] = toDo;
      state.todos = updated;
    }
  }
});

export const { addToDo, deleteToDo, updateToDo } = toDoSlice.actions;
export default toDoSlice.reducer;

