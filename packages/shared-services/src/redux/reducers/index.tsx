import { combineReducers } from "@reduxjs/toolkit";

import languageReducer from "./language";
import profileReducer from "./profile";

export const rootReducer = combineReducers({
  language: languageReducer,
});
