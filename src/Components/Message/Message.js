import React,{useContext} from 'react';
import { api_messages } from '../../apiUrl';
import UserContext from '../Provider/UserContext';
//import MessageContext from '../Provider/MessageContext';
import { Grid, Card,  Icon, Label } from 'semantic-ui-react';
//used to show one message
const Message = ({message}) => {
    const userContext = useContext(UserContext);
    //const messageContext = useContext(MessageContext);
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
    const isMyMessage=()=>{
        // console.log(message);
        return message.author._id===userContext.user.user_id;

    }
    return (
    <div> 
        <Grid columns={2}>
            <Grid.Row>
                <Grid.Column width={12} floated={isMyMessage()?'right':'left'}>
                <Card fluid={true}>
      <Card.Content>
      {isMyMessage()?
        
        <Label attached='top right' onClick={deleteMessage} color='red'>
             <Icon  textAlign='center' name='trash' />
        </Label>
        :
        ''
        }
        
            <Card.Header>{message.message}</Card.Header>
    <Card.Meta textAlign='right' ><Icon name="user"/>{message.author.username}</Card.Meta>
       
      </Card.Content>      
    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        
    </div>
    );
}

export default Message;