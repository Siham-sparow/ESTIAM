import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import FirstPage from './Components/User/FirstPage';
import MessagePage from './Components/Message/MessagePage';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={FirstPage} />
        <Route  path="/messages" component={MessagePage}  />
      </BrowserRouter>
    </div>
  );
}

export default App;