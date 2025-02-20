import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Typography} from "@mui/material";

export default function ChatList() {

    const chats = ['Some Topic', 'Summarization']

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant={"overline"}>
                        CHATS
                    </Typography>
                </ListSubheader>
            }
        >
            {chats.map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {text}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )

}