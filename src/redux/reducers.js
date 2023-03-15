import { combineReducers } from "@reduxjs/toolkit";
import FiltersReducer from "../components/Filter/filtersSlice";
import TodoListReducer from "../components/TodoList/todosSlice";

const rootReducer = combineReducers({
  filters: FiltersReducer,
  todoList: TodoListReducer
})
export default rootReducer;
