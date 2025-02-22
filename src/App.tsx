import React from 'react';
import {Box, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import {MessageProvider} from "./context/MessageContext";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <MessageProvider>
                <Sidebar/>
                <ChatWindow/>
            </MessageProvider>
        </Box>
    );
}

export default App;
