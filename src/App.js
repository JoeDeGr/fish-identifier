import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Login from './containers/Login';
import Users from './containers/Users';
import Genus from "./containers/Genus";
import Species from "./containers/Species";
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <main>
              <NavBar/>
              <Switch>
                <Route path="/home">
                  <Users/>
                </Route>
                <Route path="/Genus">
                    <Genus/>
                </Route>
                <Route path="/login">
                    <Login/> 
                </Route>
                <Route path="/species">
                  <Species/>
                </Route>
              </Switch>
            </main>
          </Router>
        </header>
      </div>
    );
  }
