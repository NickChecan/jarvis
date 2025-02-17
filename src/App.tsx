import React from 'react';
import {Box, CssBaseline} from "@mui/material";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import { SidebarProvider } from "./context/SidebarContext";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <SidebarProvider>
                <LeftSidebar />
                {/*<MainContent />*/}
            </SidebarProvider>
        </Box>
    );
}

export default App;
