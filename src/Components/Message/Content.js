import React from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';
//Big container of messages list and add message component
const Content = () => {
    return (
        <div>Content
            <MessageList />
            <NewMessage />
        </div>
    );
}

export default Content;