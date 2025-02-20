import React from 'react';
import {PersistentDrawer, DrawerHeader} from "./Sidebar.styles";
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
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {useSidebar} from "../../hooks/useSidebar";

export default function Sidebar() {

    const theme = useTheme();

    const { open, setOpen } = useSidebar();

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const chats = ['Some Topic', 'Summarization']

    return (
        <PersistentDrawer
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
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
        </PersistentDrawer>
    )
}