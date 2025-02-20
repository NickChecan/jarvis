import React from 'react';
import {Box, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import Cockpit from "./components/Cockpit/Cockpit";
import {SidebarProvider} from "./context/SidebarContext";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <SidebarProvider>
                <Cockpit/>
            </SidebarProvider>

        </Box>
    );
}

export default App;
