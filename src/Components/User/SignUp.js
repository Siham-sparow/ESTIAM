import React,{Component} from 'react';
import { api_register } from '../../apiUrl';
//contain the register or signUp component
class SignUp extends Component {
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
    
        console.log(statusCopy);
        this.setState(statusCopy);
      }

      submit(){
          console.log("update");
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
        }).catch(err=>console.log((err)));
      }
    render(){

        return (
            <div>
                <h2>Create your account</h2>
                <div>
                    <label htmlFor="username"> Username</label>
                    <input value={this.state.username} 
                        onChange={this.handleChange} 
                        name="username" 
                        type="text"></input>
                </div>
                <div>
                    <label htmlFor="password"> password</label>
                    <input value={this.state.password} 
                        onChange={this.handleChange} 
                        name="password" 
                        type="password"></input>
                </div>
                <div>
                    <button onClick={this.submit}>SignUp</button>
                </div>
            </div>
        );
    }
}

export default SignUp;