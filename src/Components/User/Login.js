import React,{Component, } from 'react';
import { api_login } from '../../apiUrl';
import UserContext from "../Provider/UserContext";
import {Redirect} from 'react-router-dom';
import { Card, Button, Image, Input } from 'semantic-ui-react';
//contain the loginComponent

class Login extends Component {
    static contextType = UserContext; 
    

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.submit= this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    // code copied from the course pokedex exemple
    handleChange(element) {
        const inputName = element.target.name;
        const inputValue = element.target.value;
        const statusCopy = Object.assign({}, this.state);
        statusCopy[inputName] = inputValue;
    
        // console.log(statusCopy);
        this.setState(statusCopy);
      }

      submit(){
        //   console.log(this.context);
        fetch(api_login,{
            method:"post",
            body:JSON.stringify(this.state),
            headers:{
                "content-type":"application/json"
            }
        })
        .then(response=>response.json())
        .then(data=>{
            // console.log(data);
            if(data.success){
                this.context.setProp('username',this.state.username);
                this.context.setProp('token',"Bearer "+data.token);
                this.context.setProp('user_id',data.user_id);
                
            }else{
                alert(data.message)
            }
        }).catch(err=>console.log((err)));
      }
    render(){
        // let loggedIn=false;
        const loggedIn= this.context.user.token!==undefined;
        return (
            <div>                
                 {loggedIn?<Redirect to="/messages"/>:''}                                                
        <Card>
            <Card.Content>        
                <Card.Header>Log into your account</Card.Header>
                    <div>                    
                    <Input 
                        
                        icon='user'
                        iconPosition='left'
                        placeholder="Nom d'utilisateur"
                        value={this.state.username} 
                        onChange={this.handleChange}  
                        name="username" 
                        type="text"></Input>
                </div>
                <div>
                   
                    <Input 
                        icon='key'
                        iconPosition='left'
                        placeholder="Mot de passe"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" 
                        type="password"></Input>
                </div>
                <div>
                    <Button onClick={this.submit}
                        color='linkedin'
                        >Chat now</Button>
                </div>
      </Card.Content>      
    </Card>
            </div>
        );
    }
}

export default Login;