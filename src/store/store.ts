import { combineReducers, configureStore } from "@reduxjs/toolkit";

import app from "./modules/app";
import language from "./modules/language";

const reducer = combineReducers({
  app,
  language,
});

const store = configureStore({
  reducer,
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store };
