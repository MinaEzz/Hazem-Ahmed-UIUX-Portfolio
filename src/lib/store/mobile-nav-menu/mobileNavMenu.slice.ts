import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./mobileNavMenu.types";

const initialState: IInitialState = {
  isOpen: false,
};

const mobileNavMenu = createSlice({
  name: "mobileNavMenu",
  initialState,
  reducers: {
    toggleMobileNavMenu(state) {
      state.isOpen = !state.isOpen;
    },
    closeMobileNavMenu(state) {
      state.isOpen = false;
    },
    openMobileNavMenu(state) {
      state.isOpen = true;
    },
  },
});

export const { toggleMobileNavMenu, closeMobileNavMenu, openMobileNavMenu } =
  mobileNavMenu.actions;
export default mobileNavMenu.reducer;
