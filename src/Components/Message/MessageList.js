import React,{useContext,useState} from 'react';
import { api_messages } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
import MessageContext from '../Provider/MessageContext';
import Message from './Message';
const MessageList = () => {
    const messageContext=useContext(MessageContext);
    const [loading,setLoading]= useState(false);
    const [messages,setMessages]= useState([]);
    const userContext = useContext(UserContext);
    const loadMessageList=()=>{
        setLoading(true);
        
        fetch(api_messages+'/f'+messageContext.channel,{
            method:"get",
            headers:{
                "Authorization":userContext.user.token
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setMessages(res)
        })
        .catch(err=>{
            console.log(err);
        })
    }

    if(!loading)
        loadMessageList();
    return (
        <div>
            {messages.map((message,index)=>{
                return <Message key={'mes_'+index} message={message} />
            })}
        </div>
    );
}

export default MessageList;