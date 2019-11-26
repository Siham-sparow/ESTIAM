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
            //messageContext.setReloadChannel(false);
            if(res[0]!==undefined&&messageContext.channel==='')messageContext.setChannel(res[0]);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    //redirect if 
    if(userContext.user.token===undefined){
        return <Redirect to='/'/>
    }
    if(!loading){
        setLoading(true);
        loadChannelList();    
    }
    setTimeout(() => {
        loadChannelList();
    }, 1000);
    return (
        <div>
<Label attached='top' color='blue'>Canal : {messageContext.channel} </Label>            
            <div>
                <Input 
                    icon='hashtag' 
                    iconPosition='left' 
                    fluid 
                    value={channelName} 
                    onChange={handleChannelNameChange} 
                    placeholder='Nouveau Canal'/>
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