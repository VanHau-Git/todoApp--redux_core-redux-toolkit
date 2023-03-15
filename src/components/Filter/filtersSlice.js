// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// const FiltersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default FiltersReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priority: [],
  },
  // trog reducer này, nó sẽ trả về là các action creator
  // cách viết như này thì k cần tạo  file actions.js trong thư mục redux nx 
  // cách viết như này thì nó sẽ dùng mutation, nhìn là mutation, nhưng thực chất là unmutation, do có lib hỗ trợ 
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload;
    },
  },
});
