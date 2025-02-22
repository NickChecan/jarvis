import {IconButton, ListSubheader, styled} from "@mui/material";

export const NewChatButton = styled(IconButton)(({theme}) => ({
    marginLeft: 'auto',
    marginRight: theme.spacing(-1.1),
}));

export const CustomListSubheader = styled(ListSubheader)(({theme}) => ({
    component: "div",
    id: "nested-list-subheader",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}));