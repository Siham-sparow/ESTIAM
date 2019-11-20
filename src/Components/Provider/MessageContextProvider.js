import React, {useState} from 'react';
import MessageContext from './MessageContext';

const MessageContextProvider = ({children}) => {
    const [channel,setChannel]= useState([]);
    
    return (
        <MessageContext.Provider
            value={{
                channel,
                setChannel
            }}>
            {children}
        </MessageContext.Provider>
    );
}

export default MessageContextProvider;