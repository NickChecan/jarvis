import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {CustomListSubheader, NewChatButton} from "./ItemsList.styles";

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
                <CustomListSubheader>
                    <Typography variant={"overline"}>
                        {title}
                    </Typography>

                    <NewChatButton color="inherit">
                        <AddIcon />
                    </NewChatButton>
                </CustomListSubheader>
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