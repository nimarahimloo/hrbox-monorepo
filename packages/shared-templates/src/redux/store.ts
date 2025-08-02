import {
  configureStore,
  Reducer,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";

export const createStoreWithReducers = (rootReducer: Reducer) => {
  const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
    key: "root",
    storage,
    whitelist: ["language"],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      }),
    devTools: {
      name: "HRBOX",
    },
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
export type RootState = ReturnType<Reducer>;
export type AppDispatch = (...args: any[]) => any;
