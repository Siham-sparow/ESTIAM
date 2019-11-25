import React from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import { Label } from 'semantic-ui-react';
//Big container of messages list and add message component
const Content = () => {
    return (
        <div>
            <Label attached='top' color='teal'>Les messages</Label>
            <div style={{height:500,overflow:'auto',padding:12, width:'98%', margin:'auto'}}>
            <MessageList />
            </div>
            
            <NewMessage />
        </div>
    );
}

export default Content;