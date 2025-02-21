import React from 'react';
import {Main} from "./ChatWindow.styles";
import {useSidebar} from "../../hooks/useSidebar";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import UserPrompt from "../UserPrompt/UserPrompt";

export default function ChatWindow() {

    const { open } = useSidebar();

    return (
        <Main open={open}>
            <DrawerHeader />
            <UserPrompt />
        </Main>
    )

}