import { combineReducers, ReducersMapObject } from "@reduxjs/toolkit";
import languageReducer from "./reducers/language.js";

const baseReducers = {
  language: languageReducer,
};

export const createRootReducer = (additionalReducers: ReducersMapObject = {}) => {
  return combineReducers({
    ...baseReducers,
    ...additionalReducers,
  });
};
