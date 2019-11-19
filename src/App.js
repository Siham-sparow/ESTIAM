import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import FirstPage from './Components/User/FirstPage';
import MessagePage from './Components/Message/MessagePage';
import UserContextProvider from './Components/Provider/UserContextProvider';
const App = () => {
  return (
    <div>
      <UserContextProvider>
        <BrowserRouter>
          <Route exact path="/" component={FirstPage} />
          <Route  path="/messages" component={MessagePage}  />
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;