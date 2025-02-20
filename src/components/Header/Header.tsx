import React from 'react';
import {Toolbar, Typography} from "@mui/material";
import {AppBar, BurgerMenu} from "../Cockpit/Cockpit.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../hooks/useSidebar";

export default function Header() {

    const { open, setOpen } = useSidebar();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
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
                    Jarvis Assistant
                </Typography>
            </Toolbar>
        </AppBar>
    )
}