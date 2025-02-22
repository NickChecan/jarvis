import React from 'react';
import {Box, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import {SidebarProvider} from "./context/SidebarContext";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import {MessageProvider} from "./context/MessageContext";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <SidebarProvider>
                <Header/>
                <MessageProvider>
                    <Sidebar/>
                    <ChatWindow/>
                </MessageProvider>
            </SidebarProvider>

        </Box>
    );
}

export default App;
