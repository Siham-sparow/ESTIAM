import React,{useState} from 'react';
//Contain the list of all channel
//also used to create new channel
const Channel = () => {
    const [channelName,setChannelName]= useState('');
    const [channels,setChannels] = useState([]);
    const handleChannelNameChange=(elt)=>{
        const value = elt.target.value;
        setChannelName(value);
    }
    return (
        <div>
            <h4>Channels</h4>
            <div>
                <input value={channelName} onChange={handleChannelNameChange} placeholder='New channel'/>
            </div>
            
            <ul>
                {channels.map((index,value)=>{
                return <li key={index} value={value}>#{value}</li>
                })}    
            </ul>            
        </div>
    );
}

export default Channel;