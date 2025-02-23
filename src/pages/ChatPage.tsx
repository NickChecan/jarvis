import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ChatWindow from "../components/ChatWindow/ChatWindow";
import {Box, CssBaseline} from "@mui/material";
import Header from "../components/Header/Header";

export default function ChatPage() {
    return (
        <Box sx={{ display: "flex", height: "100vh" }}>
            <CssBaseline/>
            <Header/>
            <Sidebar />
            <ChatWindow />
        </Box>
    );
}