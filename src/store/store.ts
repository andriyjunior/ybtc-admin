import { combineReducers, configureStore } from "@reduxjs/toolkit";
import product from "./modules/product";
import categories from "./modules/categories";
import category from "./modules/category";
import app from "./modules/app";

const reducer = combineReducers({ product, categories, category, app });

const store = configureStore({
  reducer,
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store };
