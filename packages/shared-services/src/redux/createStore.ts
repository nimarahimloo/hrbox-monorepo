import { configureStore, ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PersistConfig } from "redux-persist";

type CreateStoreOptions = {
  reducers: ReducersMapObject;
  persistKey?: string;
  whitelist?: string[];
  devToolsName?: string;
};

export const createAppStore = ({
                                 reducers,
                                 persistKey = "root",
                                 whitelist = [],
                                 devToolsName = "HRBOX",
                               }: CreateStoreOptions) => {
  const rootReducer = combineReducers(reducers);

  const persistConfig: PersistConfig<any> = {
    key: persistKey,
    storage,
    keyPrefix: "redux-",
    whitelist,
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
      name: devToolsName,
    },
  });

  const persistor = persistStore(store);

  return { store, persistor };
};

export type RootState = ReturnType<typeof combineReducers>;
export type AppDispatch = ReturnType<typeof createAppStore>["store"]["dispatch"];
