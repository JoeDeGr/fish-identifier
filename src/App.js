import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login';
import Users from './containers/Users';
import Genus from "./containers/Genus";
import Species from "./containers/Species";
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Router>
            <main>
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/genus">Genus</Link></li>
                  <li><Link to="/species">Species</Link></li>
                  <li><Link to="/user/following">MyFish</Link></li>
                </ul>
              </nav>
              <Switch>
                <Route path="/">
                  <Users/>
                </Route>
                <Route path="/Genus" render={() => <Login/>}>
                    {/* <Genus/> */}
                </Route>
                <Route path="/login" render={() => <Login/>}>
                    {/* <Login/> */}
                </Route>
                {/* <Route path="/species">
                  <Species/>
                </Route> */}
              </Switch>
            </main>
          </Router>
        </header>
      </div>
    );
  }
}
export default connect()(App);
