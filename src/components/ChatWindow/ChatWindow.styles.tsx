import {Box, IconButton, Paper, styled, TextField} from "@mui/material";

const drawerWidth = 240;

export const Main = styled('main',
    { shouldForwardProp: (prop) => prop !== 'open' }
)<{ open?: boolean; }>(({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
        {
            props: ({ open }) => open,
            style: {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            },
        },
    ],
}));
