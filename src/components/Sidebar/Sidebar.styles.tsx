import {Drawer, styled} from "@mui/material";

const drawerWidth = 240;

export const PersistentDrawer = styled(Drawer)(({theme}) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
}));

