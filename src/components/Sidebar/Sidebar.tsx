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
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import ItemsList from "../ItemsList/ItemsList";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";

export default function Sidebar() {

    const isOpen = useSelector((state: RootState) => state.sidebar.open);

    return (
        <PersistentDrawer
            variant="persistent"
            anchor="left"
            open={isOpen}
        >
            <SidebarHeader/>
            <Divider/>
            <ItemsList items={['Dashboard', 'Cockpit']} title={"apps"}/>
            <Divider/>
            <ItemsList items={['Some Topic', 'Summarization']} title={"chat"}/>
        </PersistentDrawer>
    )

}