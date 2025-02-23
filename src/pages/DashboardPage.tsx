import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import {Box, CssBaseline, Typography} from "@mui/material";
import Header from "../components/Header/Header";

export default function DashboardPage() {
    return (
        <Box sx={{display: "flex", height: "100vh"}}>
            <CssBaseline/>
            <Header/>
            <Sidebar/>
            <Typography variant="h4">Dashboard</Typography>
        </Box>
    );
}