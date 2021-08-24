import './App.css';
import Card from './components/Card/Card';
import SideMenu from './components/SideMenu/SideMenu';
import LoginCard from './components/LoginCard/LoginCard';
import Title from './components/Title/Title';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import React, { useState } from 'react';
import useToken from './useToken';



function App() {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App" >
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
