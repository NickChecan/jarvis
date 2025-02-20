import React from 'react';
import {PersistentDrawer} from "./Sidebar.styles";
import {
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListSubheader,
    Typography, useTheme
} from "@mui/material";
import {useSidebar} from "../../hooks/useSidebar";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import ChatList from "../ChatList/ChatList";

export default function Sidebar() {

    const { open } = useSidebar();

    return (
        <PersistentDrawer
            variant="persistent"
            anchor="left"
            open={open}
        >
            <SidebarHeader/>
            <Divider/>
            <ChatList/>
        </PersistentDrawer>
    )

}