import React, {useState} from 'react';
import MessageContext from './MessageContext';

const MessageContextProvider = ({children}) => {
    const [messages,setMessages]= useState([]);
    
    return (
        <MessageContext.Provider
            value={{

            }}>
            {children}
        </MessageContext.Provider>
    );
}

export default MessageContextProvider;