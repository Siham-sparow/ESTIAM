import React,{useContext} from 'react';
import MessageContext from '../Provider/MessageContext';
import { List } from 'semantic-ui-react';
//contain one item (channel or user) for message
// use to change the message list to be show
const Item = ({value}) => {
    const messageContext= useContext(MessageContext);
    const style={
        active:{
            color:'blue !important',
            fontSize:27
        }
    }
    const changeChannel=()=>{
        messageContext.setChannel(value);
        messageContext.setMessages([]);
    }
    const isActive=(value)=>{
        // console.log(value);
        // console.log(messageContext);
        // console.log(value===messageContext.channel);
        return value===messageContext.channel
    }
    
    return (
        <List.Item icon='hashtag' style={isActive(value)?style.active:{}} value={value} onClick={changeChannel} content={`${value}`}/>
    );
}

export default Item;