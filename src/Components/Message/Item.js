import React,{useContext} from 'react';
import MessageContext from '../Provider/MessageContext';
//contain one item (channel or user) for message
// use to change the message list to be show
const Item = ({value}) => {
    const messageContext= useContext(MessageContext);
    const style={
        active:{
            color:'#fff',
        }
    }
    const changeChannel=()=>{
        messageContext.setChannel(value);
        messageContext.setMessages([]);
    }
    const isActive=(value)=>{
        console.log(value);
        console.log(messageContext.channel);
        return value===messageContext.channel
    }
    
    return (
        <li style={isActive()?style.active:{}} value={value} onClick={changeChannel}>#{value}</li>
    );
}

export default Item;