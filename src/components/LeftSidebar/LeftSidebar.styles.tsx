import {Drawer} from "@mui/material";
import {styled} from '@mui/material/styles';

const drawerWidth = 240;

export const CustomDrawer = styled(Drawer)(({theme}) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
}));