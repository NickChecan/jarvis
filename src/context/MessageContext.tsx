import React, {createContext, ReactNode, useReducer, useState} from "react";

type Sender = "assistant" | "user";
type Message = { text: string; sender: Sender };

const initialState: Message[] = [];

function messageReducer(state: Message[], action: { type: string; payload?: Message }) {
    switch (action.type) {
        case "ADD_MESSAGE":
            return [...state, action.payload!];
        case "CLEAR_MESSAGES":
            return [];
        default:
            return state;
    }
}

export const MessageContext = createContext<{
    messages: Message[];
    addMessage: (msg: Message) => void;
    clearMessages: () => void;
} | null>(null);

export function MessageProvider({ children }: { children: ReactNode }) {
    const [messages, dispatch] = useReducer(messageReducer, initialState);

    const addMessage = (msg: Message) =>
        dispatch({ type: "ADD_MESSAGE", payload: msg });

    const clearMessages = () =>
        dispatch({ type: "CLEAR_MESSAGES" });

    return (
        <MessageContext.Provider value={{ messages, addMessage, clearMessages }}>
            {children}
        </MessageContext.Provider>
    );
}