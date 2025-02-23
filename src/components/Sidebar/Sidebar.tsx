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
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {setSelectedItem} from "../../features/SidebarSlice";

export default function Sidebar() {
    const dispatch = useDispatch();

    const isOpen = useSelector((state: RootState) => state.sidebar.open);

    const selectedItem = useSelector((state: RootState) => state.sidebar.selectedItem);

    const apps = ['Dashboard', 'Cockpit'];

    const chats = ['Some Topic', 'Summarization'];

    return (
        <PersistentDrawer
            variant="persistent"
            anchor="left"
            open={isOpen}
        >
            <SidebarHeader/>
            <Divider/>
            <ItemsList
                items={apps}
                title={"apps"}
                selectedItem={selectedItem}
                onItemSelect={(item) => dispatch(setSelectedItem(item))}
            />
            <Divider/>
            <ItemsList
                items={chats}
                title={"chat"}
                selectedItem={selectedItem}
                onItemSelect={(item) => dispatch(setSelectedItem(item))}
            />
        </PersistentDrawer>
    )

}