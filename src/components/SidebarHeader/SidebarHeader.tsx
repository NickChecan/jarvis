import React from 'react';
import {IconButton, useTheme} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import {useSidebar} from "../../hooks/useSidebar";

export default function SidebarHeader() {

    const theme = useTheme();

    const { setOpen } = useSidebar();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
        </DrawerHeader>
    )

}