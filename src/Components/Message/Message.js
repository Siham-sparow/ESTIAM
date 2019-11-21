import React,{useContext} from 'react';
import { api_messages } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
import MessageContext from '../Provider/MessageContext';
//used to show one message
const Message = ({message}) => {
    const userContext = useContext(UserContext);
    const messageContext = useContext(MessageContext);
    const deleteMessage=()=>{
        fetch(api_messages+'/'+message['_id'],{
            method:"delete",
            headers:{
                "Authorization":userContext.user.token
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if(res['success']!==false);
            //messageContext.clearMessages();
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
    <div> {message.message}
        <button onClick={deleteMessage}>delete</button>
    </div>
    );
}

export default Message;