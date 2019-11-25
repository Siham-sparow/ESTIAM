import React,{useState, useContext} from 'react';
import { api_channels } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
import {Redirect} from 'react-router-dom';
import MessageContext from '../Provider/MessageContext';
import Item from './Item';
import { Input, List, Label } from 'semantic-ui-react';
//Contain the list of all channel
//also used to create new channel
const Channel = () => {
    const [channelName,setChannelName]= useState('');
    const [channels,setChannels] = useState([]);
    const [loading,setLoading]= useState(false);
    const userContext = useContext(UserContext);
    const messageContext = useContext(MessageContext);
    const handleChannelNameChange=(elt)=>{
        const value = elt.target.value;
        setChannelName(value);
        messageContext.setChannel(value);
    }    
    
    const loadChannelList=()=>{
        setLoading(true);
        
        fetch(api_channels,{
            method:"get",
            headers:{
                "Authorization":userContext.user.token
            }
        })
        .then(res=>res.json())
        .then(res=>{
            // console.log(res);
            setChannels(res)
            if(res[0]!==undefined)messageContext.setChannel(res[0]);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    //redirect if 
    if(userContext.user.token===undefined){
        return <Redirect to='/'/>
    }
    if(!loading)
        loadChannelList();
    return (
        <div>
<Label attached='top' color='blue'>Canal : {messageContext.channel} </Label>
            
            <div>
                <Input fluid value={channelName} onChange={handleChannelNameChange} placeholder='New channel'/>
            </div>
            <List>
                {channels.map((value,index)=>{
                return <Item key={index} value={value}/>
                })}    
            </List>            
        </div>
    );
}

export default Channel;