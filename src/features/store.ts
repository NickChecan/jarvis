import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./SidebarSlice";
import chatReducer from "./ChatSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistedSidebarReducer = persistReducer({
    key: 'sidebar',
    storage,
}, sidebarReducer);

const persistedChatReducer = persistReducer({
    key: 'chat',
    storage,
}, chatReducer);

export const store = configureStore({
    reducer: {
        sidebar: persistedSidebarReducer,
        session: persistedChatReducer,
    },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;