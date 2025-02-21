import React from 'react';
import {Toolbar, Typography} from "@mui/material";
import {AppBar, BurgerMenu} from "./Header.styles";
import MenuIcon from "@mui/icons-material/Menu";
import { useSidebar } from "../../hooks/useSidebar";

export default function Header() {

    const { open, setOpen } = useSidebar();

    const handleDrawerOpen = () => {
        setOpen(true);
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
                    Jarvis
                </Typography>
            </Toolbar>
        </AppBar>
    )
}