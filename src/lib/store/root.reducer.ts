import { combineReducers } from "@reduxjs/toolkit";
import mobileNavMenuReducer from "./mobile-nav-menu/mobileNavMenu.slice";
import projectsFilterReducer from "./projects-filter/projectsFilter.slice";

export const rootReducer = combineReducers({
  mobileNavMenu: mobileNavMenuReducer,
  projectsFilter: projectsFilterReducer,
});
