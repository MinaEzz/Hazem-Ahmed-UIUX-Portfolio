import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./projectsFilter.types";

const initialState: IInitialState = {
  selected: "all",
};

const projectsFilter = createSlice({
  name: "projectsFilter",
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    resetSelected: (state) => {
      state.selected = "all";
    },
  },
});

export const { setSelected, resetSelected } = projectsFilter.actions;
export default projectsFilter.reducer;
