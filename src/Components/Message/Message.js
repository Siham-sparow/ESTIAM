import React from 'react';
//used to show one message
const Message = ({message}) => {
    console.log(message);
    return (
    <div> {message.message}</div>
    );
}

export default Message;