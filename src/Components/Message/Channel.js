import React,{useState, useContext} from 'react';
import { api_channels } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
import {Redirect} from 'react-router-dom';
//Contain the list of all channel
//also used to create new channel
const Channel = () => {
    const [channelName,setChannelName]= useState('');
    const [channels,setChannels] = useState([]);
    const [loading,setLoading]= useState(false);
    const userContext = useContext(UserContext);
    
    const handleChannelNameChange=(elt)=>{
        const value = elt.target.value;
        setChannelName(value);
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
            console.log(res);
            setChannels(res)
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
            <h4>Channels</h4>
            <div>
                <input value={channelName} onChange={handleChannelNameChange} placeholder='New channel'/>
            </div>
            {channelName}
            <ul>
                {channels.map((index,value)=>{
                return <li key={index} value={value}>#{value}</li>
                })}    
            </ul>            
        </div>
    );
}

export default Channel;