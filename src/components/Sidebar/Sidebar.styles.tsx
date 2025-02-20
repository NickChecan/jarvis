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

export const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0,1),
    // necessary for content to be bellow app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));