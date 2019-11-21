import React, {useState} from 'react';
import MessageContext from './MessageContext';

const MessageContextProvider = ({children}) => {
    const [channel,setChannel]= useState('');
    const [messages,setMessages]= useState([]);
    const addMessage=(message)=>{
        setMessages([...messages,message]);
    }
    const clearMessages=()=>{
        setMessages([]);
    }
    return (
        <MessageContext.Provider
            value={{
                channel,
                setChannel,
                messages,
                addMessage,
                setMessages,
                clearMessages
            }}>
            {children}
        </MessageContext.Provider>
    );
}

export default MessageContextProvider;