import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import app from "./modules/app";
import language from "./modules/language";
import user from "./modules/user";

const persistConfig = {
  key: "counter",
  storage,
  whitelist: ["user"],
};

const reducers = combineReducers({
  app,
  language,
  user,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store };
