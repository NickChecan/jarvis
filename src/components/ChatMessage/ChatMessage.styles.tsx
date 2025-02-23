import {styled} from "@mui/material";

export const ChatMessageContainer = styled("div")<{ isUser: boolean }>(({ isUser }) => ({
    textAlign: isUser ? "right" : "left",
    margin: "5px 0",
    display: "flex",
    justifyContent: isUser ? "flex-end" : "flex-start",
}));

export const ChatBubble = styled("div")<{ isUser: boolean }>(({ isUser }) => ({
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "10px",
    backgroundColor: isUser ? "#0078ff" : "#e0e0e0",
    color: isUser ? "white" : "black",
    wordWrap: "break-word",
}));