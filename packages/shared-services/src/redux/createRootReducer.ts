import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profile";
import languageReducer from "./reducers/language";

export const createRootReducer = (customReducers = {}) =>
    combineReducers({
        profile: profileReducer,
        language: languageReducer,
        ...customReducers,
    });
