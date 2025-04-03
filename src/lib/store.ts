"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/themeSlice";
import languagelSlice from "./features/language/languageSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["language", "theme"], // specify slices to persist
};
const rootReducer = {
  language: languagelSlice,
  theme: themeSlice,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer)
);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

// Persistor
export const persistor = persistStore(store);
// export default store;
export default store;
