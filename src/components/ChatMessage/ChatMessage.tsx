import React from 'react';

interface ChatMessageProps {
    text: string;
    sender: "user" | "assistant";
}

export default function ChatMessage({ text, sender }: ChatMessageProps) {
    const isUser = sender === 'user';

    return (
        <div
            style={{
                textAlign: isUser ? "right" : "left",
                margin: "5px 0",
                display: "flex",
                justifyContent: isUser ? "flex-end" : "flex-start"
            }}
        >
            <div
                style={{
                    maxWidth: "70%",
                    padding: "10px",
                    borderRadius: "10px",
                    backgroundColor: isUser ? "#0078ff" : "#e0e0e0",
                    color: isUser ? "white" : "black",
                    wordWrap: "break-word"
                }}
            >
                {text}
            </div>
        </div>
    )
}