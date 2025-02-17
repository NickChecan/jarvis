import React from 'react';
import {DrawerHeader} from "./LeftSidebarHeader.styles";
import {IconButton, useTheme} from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useSidebar } from "../../hooks/useSidebar";

export default function LeftSidebarHeader() {
    const theme = useTheme();
    const { setOpen } = useSidebar();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
        </DrawerHeader>
    )
}