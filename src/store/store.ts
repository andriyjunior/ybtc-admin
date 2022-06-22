import { combineReducers, configureStore } from "@reduxjs/toolkit";
import product from "./modules/product/product";
import productPost from "./modules/product/product-post";
import productOptions from "./modules/product/product-options";
import categories from "./modules/categories";
import category from "./modules/category";
import subCategory from "./modules/subCategory";
import app from "./modules/app";

const reducer = combineReducers({
  product,
  productOptions,
  categories,
  category,
  subCategory,
  app,
});

const store = configureStore({
  reducer,
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store };
