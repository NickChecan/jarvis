import React from 'react';
import {Box, CssBaseline, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import Cockpit from "./components/Cockpit/Cockpit";

function App() {
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Cockpit/>

        </Box>
    );
}

export default App;
