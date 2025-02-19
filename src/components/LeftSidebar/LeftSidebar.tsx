import React from 'react';
import {CustomDrawer} from "./LeftSidebar.styles";
import LeftSidebarHeader from "../LeftSidebarHeader/LeftSidebarHeader";
import { useSidebar } from "../../hooks/useSidebar";
import {Divider} from "@mui/material";

export default function LeftSidebar() {
    const { open } = useSidebar();

    return (
        <CustomDrawer variant="persistent" anchor="left" open={open}>
            <LeftSidebarHeader />
            <Divider />

        </CustomDrawer>
    )
}