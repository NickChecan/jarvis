import React from 'react';
import {Main, MessagesContainer} from "./ChatWindow.styles";
import {useSidebar} from "../../hooks/useSidebar";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import UserPrompt from "../UserPrompt/UserPrompt";
import ChatMessage from "../ChatMessage/ChatMessage";
import {useMessages} from "../../hooks/useMessages";

type Sender = 'assistant' | 'user';

export default function ChatWindow() {

    const { open } = useSidebar();

    const { messages } = useMessages();

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