import React from 'react';
import {ChatMessageContainer, ChatBubble} from "./ChatMessage.styles";

interface ChatMessageProps {
    text: string;
    sender: "user" | "assistant";
}

export default function ChatMessage({ text, sender }: ChatMessageProps) {
    const isUser = sender === 'user';

    return (
        <ChatMessageContainer isUser={isUser}>
            <ChatBubble isUser={isUser}>{text}</ChatBubble>
        </ChatMessageContainer>
    )
}