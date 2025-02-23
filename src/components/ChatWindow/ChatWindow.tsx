import React from 'react';
import {Main, MessagesContainer} from "./ChatWindow.styles";
import {DrawerHeader} from "../SidebarHeader/SidebarHeader.styles";
import UserPrompt from "../UserPrompt/UserPrompt";
import ChatMessage from "../ChatMessage/ChatMessage";
import {useSelector} from "react-redux";
import {RootState} from "../../features/store";

type Sender = 'assistant' | 'user';

export default function ChatWindow() {

    const isOpen = useSelector((state: RootState) => state.sidebar.open);

    const chatName = useSelector((state: RootState) => state.sidebar.selectedItem);

    const messages = useSelector((state: RootState) => {
        const chat = state.session.chats.find(chat => chat.name === chatName);
        return chat ? chat.messages : [];
    });

    return (
        <Main open={isOpen}>
            <DrawerHeader />
            <MessagesContainer>
                {messages.map((msg, index) => (
                    <ChatMessage key={index} text={msg.text} sender={msg.sender} />
                ))}
            </MessagesContainer>
            <UserPrompt/>
        </Main>
    )

}