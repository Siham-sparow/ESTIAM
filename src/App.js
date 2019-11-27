import React from 'react';
import './App.css';
import {BrowserRouter, Route,Redirect} from 'react-router-dom'
import FirstPage from './Components/User/FirstPage';
import MessagePage from './Components/Message/MessagePage';
import UserContextProvider from './Components/Provider/UserContextProvider';
import MessageContextProvider from './Components/Provider/MessageContextProvider';

//component to redirect to homme
const RedirectToHome=()=>{
  return (
    <Redirect to='/'/>
  )
}
const App = () => {
  return (
    <div>
      <UserContextProvider>
        <MessageContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={FirstPage} />
          <Route  path="/messages" component={MessagePage}  />
          <Route component={RedirectToHome}/>
        </BrowserRouter>
        </MessageContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;