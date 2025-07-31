import { combineReducers } from "@reduxjs/toolkit";

import languageReducer from "./language.js";

export const rootReducer = combineReducers({
  language: languageReducer,
});

export * from "./language.js"
