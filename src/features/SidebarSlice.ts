import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SidebarState = {
    open: boolean;
};

const initialState: SidebarState = {
    open: false,
};

const sidebarSlice = createSlice({
        name: "sidebar",
        initialState,
        reducers: {
            setOpen: (state, action: PayloadAction<boolean>) => {
                state.open = action.payload;
            },
            toggleSidebar: (state) => {
                state.open = !state.open;
            },
        },
    })
;

export const {setOpen, toggleSidebar} = sidebarSlice.actions;
export default sidebarSlice.reducer;