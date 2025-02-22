import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedSidebarReducer = persistReducer(persistConfig, sidebarReducer);

export const store = configureStore({
    reducer: {
        sidebar: persistedSidebarReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;