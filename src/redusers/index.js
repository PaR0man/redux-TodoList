import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";
import { filterReducer } from "./filterReducer";

export const rootReduser = combineReducers({ todoReducer, filterReducer });
