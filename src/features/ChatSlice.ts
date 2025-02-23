import {createSlice} from "@reduxjs/toolkit";

type Message = {
    text: string;
    sender: "user" | "assistant";
}

type Chat = {
    name: string;
    messages: Message[];
}

type ChatState = {
    chats: Chat[];
}

const initialState: ChatState = {
    chats: [
        {
            name: "New Chat",
            messages: []
        }
    ]
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const { chatName, message, sender } = action.payload;
            const chat = state.chats.find(chat => chat.name === chatName);
            if (chat) {
                chat.messages.push({ text: message, sender });
            }
        },
    },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;