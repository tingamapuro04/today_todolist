import { combineReducers } from "redux";
import jokeReducer from "./jokeSlice";
import todoReducer from "./toDoSlice";
import userReducer from "./userSlice";


// Root reducers for holding all the reducers
const rootReducer = combineReducers({
  counter: jokeReducer,
  todoList: todoReducer,
  user: userReducer,
});

export default rootReducer;