import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

export const createAppStore = (rootReducer: any, persistKey = "root") => {
    const persistConfig = {
        key: persistKey,
        storage,
        keyPrefix: "redux-",
        whitelist: [],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = configureStore({
        reducer: persistedReducer,
        [baseApi.reducerPath]: baseApi.reducer,
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

    return {
        store,
        persistor,
    };
};
