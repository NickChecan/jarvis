import React, { useState } from 'react';
import {
    ButtonsRowBox,
    CustomPaper,
    promptInputProps,
    SendIconButton
} from "./UserPrompt.styles";
import SendIcon from "@mui/icons-material/Send";
import {Button, IconButton, TextField} from "@mui/material";
import {Add} from "@mui/icons-material";
import {useMessages} from "../../hooks/useMessages";

export default function UserPrompt() {
    const [input, setInput] = useState("");

    const { addMessage } = useMessages();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            addMessage({ text: input, sender: "user" });
            setInput("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CustomPaper elevation={2}>
                <TextField
                    variant="standard"
                    multiline={true}
                    maxRows={5}
                    placeholder="Message Deere AI"
                    fullWidth
                    InputProps={promptInputProps}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <ButtonsRowBox>
                    <IconButton color="inherit">
                        <Add />
                    </IconButton>
                    <Button color="inherit" variant={'text'}>
                        GPT-4o
                    </Button>
                    <SendIconButton type="submit">
                        <SendIcon />
                    </SendIconButton>
                </ButtonsRowBox>
            </CustomPaper>
        </form>
    )
}