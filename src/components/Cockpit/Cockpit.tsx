import React from 'react';
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon, ListSubheader,
    Toolbar,
    Typography,
    useTheme
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {AppBar, BurgerMenu, Sidebar, SidebarHeader} from "./Cockpit.styles";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSidebar } from "../../hooks/useSidebar";

export default function Cockpit() {

    const theme = useTheme();

    const { open, setOpen } = useSidebar();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const chats = ['Some Topic', 'Summarization']

    return (
        <>
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <BurgerMenu
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={[
                            open && { display: 'none' },
                        ]}
                    >
                        <MenuIcon/>
                    </BurgerMenu>
                    <Typography variant="h6" noWrap component="div">
                        Persistent Drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Sidebar
                variant="persistent"
                anchor="left"
                open={open}
            >
                <SidebarHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </SidebarHeader>
                <Divider/>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            <Typography variant={"overline"}>
                                CHATS
                            </Typography>
                        </ListSubheader>
                    }
                >
                    {chats.map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {text}
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Sidebar>
        </>
    );
}