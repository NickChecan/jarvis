import React from 'react';
import {Main, MessagesContainer} from "./ChatWindow.styles";
import {useSidebar} from "../../hooks/useSidebar";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import UserPrompt from "../UserPrompt/UserPrompt";
import ChatMessage from "../ChatMessage/ChatMessage";

type Sender = 'assistant' | 'user';

export default function ChatWindow() {

    const { open } = useSidebar();

    const messages: { text: string; sender: Sender }[] = [
        { text: "Hello", sender: 'assistant' },
        { text: "Hi", sender: 'user' },
        { text: "Hello", sender: 'assistant' },
        { text: "Hi", sender: 'user' },
    ];

    return (
        <Main open={open}>
            <DrawerHeader />
            <MessagesContainer>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} text={msg.text} sender={msg.sender} />
                ))}
            </MessagesContainer>
            <UserPrompt />
        </Main>
    )

}