import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filter/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";
// import { createStore } from "redux";
// import rootReducer from "./reducers";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancers = composeWithDevTools(); // middleware
// const store = createStore(rootReducer, composeEnhancers);
// export default store;

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todosSlice.reducer, 
  },
});

export default store;
