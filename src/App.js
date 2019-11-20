import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import FirstPage from './Components/User/FirstPage';
import MessagePage from './Components/Message/MessagePage';
import UserContextProvider from './Components/Provider/UserContextProvider';
import MessageContextProvider from './Components/Provider/MessageContextProvider';
const App = () => {
  return (
    <div>
      <UserContextProvider>
        <MessageContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={FirstPage} />
          <Route  path="/messages" component={MessagePage}  />
        </BrowserRouter>
        </MessageContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;