import {Box, IconButton, Paper, styled, TextField} from "@mui/material";

export const CustomPaper = styled(Paper)(({ theme }) => ({
    bottom: theme.spacing(3),
    height: 'auto',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 5,
    marginTop: 'auto',

}));

export const PromptTextField = styled(TextField)(({ theme }) => ({
    flexGrow: 1,
}));

export const promptInputProps = {
    disableUnderline: true,
    style: {
        padding: 8,
    },
};

export const ButtonsRowBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: theme.spacing(1),
}));

export const SendIconButton = styled(IconButton)(({ theme }) => ({
    marginLeft: 'auto',
    marginRight: theme.spacing(1),
}));