import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatWindow from "./components/ChatWindow/ChatWindow";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <ChatWindow/>
        </Box>
    );
}

export default App;
