import React from 'react';
import {IconButton, useTheme} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import {toggleSidebar} from "../../features/SidebarSlice";
import {useDispatch} from "react-redux";

export default function SidebarHeader() {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <DrawerHeader>
            <IconButton onClick={() => dispatch(toggleSidebar())}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </DrawerHeader>
    )

}