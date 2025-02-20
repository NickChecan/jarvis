import React from 'react';
import {Box, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import {SidebarProvider} from "./context/SidebarContext";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <SidebarProvider>
                <Header />
                <Sidebar />
            </SidebarProvider>

        </Box>
    );
}

export default App;
