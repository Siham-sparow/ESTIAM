import React,{useState,useContext} from 'react';
import { api_messages } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
import MessageContext from '../Provider/MessageContext';
import { Button, Icon, Input, Grid } from 'semantic-ui-react';
//used to send new message
const NewMessage = () => {
    const [message,setMessage]=useState('');
    const handleChange=(event)=>{
        setMessage(event.target.value);
    }
    const userContext=useContext(UserContext);
    const messageContext= useContext(MessageContext);
    const submit=()=>{
        fetch(api_messages+'/'+messageContext.channel,{
            method:'post',
            headers:{
                "authorization":userContext.user.token,
                "content-type":"application/json"
            },
            body:JSON.stringify({
                message:message,                               
            })
        })
        .then(res=>res.json())
        .then(res=>{
            console.log('success');
            messageContext.addMessage(res);
            messageContext.setChannel(messageContext.channel);
            setMessage('');
            console.log(JSON.stringify(res));
        })
        .catch(err=>{
            console.log('error')
            console.log(JSON.stringify(err));
        })
        
    }
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Input fluid size='large' type='text' value={message} onChange={handleChange} />
                    </Grid.Column> 
                    <Grid.Column width={1}>
                        <Button color='teal' onClick={submit}>                
                            <Icon name='send'/>
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={1}></Grid.Column>
                </Grid.Row>
            </Grid>
            
            
        </div>
    );
}

export default NewMessage;