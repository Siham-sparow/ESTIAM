import React,{Component} from 'react';
import { api_register } from '../../apiUrl';
import { Input, Card, Button, Message } from 'semantic-ui-react';
//contain the register or signUp component
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            errorMessage:'',
            success:false,
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
        this.setState(statusCopy);
      }

      submit(){
        //clear error message and set success to false
        const statusCopy = Object.assign({}, this.state);
        statusCopy['errorMessage'] = '';
        statusCopy['success']=false;    
        this.setState(statusCopy);
        fetch(api_register,{
            method:"post",
            body:JSON.stringify(this.state),
            headers:{
                "content-type":"application/json"
            }
        })
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
                const statusCopy = Object.assign({}, this.state);
                statusCopy['success'] = data.success;
                if(!data.success){
                    statusCopy['errorMessage']=data.message;
                }
                this.setState(statusCopy);
        }).catch(err=>{
            const statusCopy = Object.assign({}, this.state);
                statusCopy['errorMessage'] = JSON.stringify(err);    
                this.setState(statusCopy);
        });
      }
    render(){

        return (
            <div>
                <div>
                {this.state.errorMessage!==''?
                <Message negative>
                    <Message.Header>Une erreur s'est produite</Message.Header>
                    <p>{ this.state.errorMessage }</p>
                </Message> 
                :''} 
                {this.state.success?
                <Message positive>
                    <Message.Header>Créqtion de compte réussi.</Message.Header>
                    <p>Utulisez vos identifiant pour rejoindre l'espace de tchat.</p>
                </Message> 
                :''}    
                </div> 
                <Card>
            <Card.Content>        
                <Card.Header>Créer votre compte</Card.Header>
                <div>
                    <Input 
                        icon='user'
                        iconPosition='left'
                        placeholder="Nom d'utilisateur"
                        value={this.state.username} 
                        onChange={this.handleChange} 
                        name="username" 
                        type="text"/>
                </div>
                <div>
                    <Input 
                        icon='key'
                        iconPosition='left'
                        placeholder="Mot de passe"
                        value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" 
                        type="password"/>
                </div>
                <div>
                    <Button color='blue' onClick={this.submit}>M'enregistrer</Button>
                </div>
                </Card.Content>
                </Card>
            </div>
        );
    }
}

export default SignUp;