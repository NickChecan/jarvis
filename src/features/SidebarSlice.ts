import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SidebarState = {
    open: boolean;
    selectedItem: string;
};

const initialState: SidebarState = {
    open: true,
    selectedItem: "Some Topic",
};

const sidebarSlice = createSlice({
        name: "sidebar",
        initialState,
        reducers: {
            toggleSidebar: (state) => {
                state.open = !state.open;
            },
            setSelectedItem: (state, action: PayloadAction<string>) => {
                state.selectedItem = action.payload;
            },
        },
    })
;

export const {toggleSidebar, setSelectedItem} = sidebarSlice.actions;
export default sidebarSlice.reducer;