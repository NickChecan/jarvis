import React from 'react';
import {Toolbar, Typography} from "@mui/material";
import {AppBar, BurgerMenu, Title} from "./Header.styles";
import MenuIcon from "@mui/icons-material/Menu";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../features/store";
import {toggleSidebar} from "../../features/SidebarSlice";

export default function Header() {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.sidebar.open);

    return (
        <AppBar position="fixed" open={isOpen}>
            <Toolbar>
                <BurgerMenu
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => dispatch(toggleSidebar())}
                    edge="start"
                    sx={[
                        isOpen && { display: 'none' },
                    ]}
                >
                    <MenuIcon/>
                </BurgerMenu>
                <Title variant="h6" noWrap>
                    Jarvis
                </Title>
            </Toolbar>
        </AppBar>
    )
}