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
import {useNavigate} from "react-router-dom";

export default function Sidebar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isOpen = useSelector((state: RootState) => state.sidebar.open);
    const selectedItem = useSelector((state: RootState) => state.sidebar.selectedItem);
    const apps = ['Dashboard'];
    const chats = useSelector((state: RootState) => state.session.chats).map(chat => chat.name);

    const handleNavigation = (item: string) => {
        dispatch(setSelectedItem(item));
        navigate(item === "Dashboard" ? "/dashboard" : "/chat");
    };

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
                onItemSelect={handleNavigation}
            />
            <Divider/>
            <ItemsList
                items={chats}
                title={"chat"}
                selectedItem={selectedItem}
                onItemSelect={handleNavigation}
            />
        </PersistentDrawer>
    )

}