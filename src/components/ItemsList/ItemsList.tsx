import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Typography} from "@mui/material";

interface ItemsListProps {
    items: string[];
    title: string;
}

export default function ItemsList({ items, title }: ItemsListProps) {

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant={"overline"}>
                        {title}
                    </Typography>
                </ListSubheader>
            }
        >
            {items.map((text, index) => (
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