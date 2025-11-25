import { combineReducers } from "@reduxjs/toolkit";
import mobileNavMenuReducer from "./mobile-nav-menu/mobileNavMenu.slice";

export const rootReducer = combineReducers({
  mobileNavMenu: mobileNavMenuReducer,
});
