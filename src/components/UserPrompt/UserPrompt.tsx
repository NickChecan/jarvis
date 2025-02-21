import React from 'react';
import {
    ButtonsRowBox,
    CustomPaper,
    promptInputProps,
    SendIconButton
} from "./UserPrompt.styles";
import SendIcon from "@mui/icons-material/Send";
import {TextField} from "@mui/material";

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
                <SendIconButton>
                    <SendIcon />
                </SendIconButton>
            </ButtonsRowBox>
        </CustomPaper>
    )
}