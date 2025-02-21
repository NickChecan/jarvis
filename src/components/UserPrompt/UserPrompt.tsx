import React from 'react';
import {
    ButtonsRowBox,
    CustomPaper,
    promptInputProps,
    SendIconButton
} from "./UserPrompt.styles";
import SendIcon from "@mui/icons-material/Send";
import {Button, IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";

export default function UserPrompt() {
    return (
        <CustomPaper elevation={2}>
            <TextField
                variant="standard"
                multiline={true}
                maxRows={5}
                placeholder="Message Deere AI"
                fullWidth
                InputProps={promptInputProps}
            />
            <ButtonsRowBox>
                <IconButton color="inherit">
                    <Add />
                </IconButton>
                <Button color="inherit" variant={'text'}>
                    GPT-4o
                </Button>
                <SendIconButton>
                    <SendIcon />
                </SendIconButton>
            </ButtonsRowBox>
        </CustomPaper>
    )
}