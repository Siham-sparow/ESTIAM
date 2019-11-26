import React from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import { Label, Card } from 'semantic-ui-react';
//Big container of messages list and add message component
const Content = () => {
    return (
        <div>
           
            <Card  fluid>
                <Card.Content>
                    <Label attached='top' color='teal'>Les messages</Label>
                    <div style={{height:600,overflow:'auto',padding:12, width:'98%', margin:'auto'}}>
                        <MessageList />
                    </div>
                    <NewMessage />
                </Card.Content>
            </Card>
            
            
        </div>
    );
}

export default Content;