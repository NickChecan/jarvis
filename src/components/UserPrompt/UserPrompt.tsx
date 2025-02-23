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
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../../features/ChatSlice";
import {RootState} from "../../features/store";

export default function UserPrompt() {
    const dispatch = useDispatch();

    const [input, setInput] = useState("");

    const chatName = useSelector((state: RootState) => state.sidebar.selectedItem);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addMessage({ chatName, message: input, sender: "user"}));
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
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                            e.preventDefault();
                            handleSubmit(e);
                        }
                    }}
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