import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './nav/NavBar';
import  PrivateRoute  from './components/PrivateRoute'
import LoginContainer from './containers/LoginContainer';
import Users from './containers/UsersContainer';
import GenusContainer from "./containers/GenusContainer";
import SpeciesContainer from "./containers/SpeciesContainer";
import Home from "./containers/Home"
import { history } from './helpers/history';
import { Router, Route, Switch} from 'react-router-dom';

export default function App () {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token){
      fetch('http://localhost:3000/auto_login', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(resp => resp.json)
      .then(data => {
        console.log(data)
      })
    }
  })

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router history = { history }>
            <main>
              <NavBar/>
              <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/Genus">
                    <GenusContainer/>
                </Route>
                <Route path="/login">
                    <LoginContainer history = { history } /> 
                </Route>
                <Route path="/species">
                  <SpeciesContainer/>
                </Route >
                <PrivateRoute path="/user">
                  <Users/>
                  {/* <UserLogout/> */}
                </PrivateRoute>
              </Switch>
            </main>
          </Router>
        </header>
      </div>
    );
  };
