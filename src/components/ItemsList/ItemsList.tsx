import React from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListSubheader, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import {CustomListSubheader, NewChatButton} from "./ItemsList.styles";

interface ItemsListProps {
    items: string[];
    title: string;
    selectedItem?: string;
    onItemSelect?: (item: string) => void;
}

export default function ItemsList({items, title, selectedItem, onItemSelect}: ItemsListProps) {

    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper'
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <CustomListSubheader>
                    <Typography variant={"overline"}>
                        {title}
                    </Typography>
                    {title === "chat" && (
                        <NewChatButton color="inherit">
                            <AddIcon/>
                        </NewChatButton>
                    )}
                </CustomListSubheader>
            }
        >
            {items.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton
                        selected={selectedItem === item}
                        onClick={() => onItemSelect && onItemSelect(item)}
                    >
                        <ListItemIcon>
                            {item}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )

}