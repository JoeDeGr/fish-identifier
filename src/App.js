import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './nav/NavBar';
import PrivateRoute  from './components/PrivateRoute'
import LoginContainer from './containers/LoginContainer';
import Users from './containers/UsersContainer';
import GenusContainer from "./containers/GenusContainer";
import SpeciesContainer from "./containers/SpeciesContainer";
import Home from "./containers/Home"
import { history } from './helpers/history';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './actions/userActions'

class App extends React.Component {

  // useEffect(() => {
  //   const token = localStorage.getItem('token')
  //   if (token){
  //     fetch('http://localhost:3000/auto_login', {
  //       headers: {
  //         Authorization: 'Bearer ' + token
  //       }
  //     })
  //     .then(resp => resp.json)
  //     .then(data => {
  //       console.log(data)
  //     })
  //   }
  // })
  
  
  componentDidMount(){
    debugger
    const token = localStorage.getItem('token')
    if (token){
      this.props.getAll()
    }
    }
  render (){
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
                    <LoginContainer history = { history } login = {this.props.login} createUser = {this.props.createUser} /> 
                </Route>
                <Route path="/species">
                  <SpeciesContainer/>
                </Route >
                <PrivateRoute path="/user">
                  <Users logout={this.props.logout} />
                </PrivateRoute>
              </Switch>
            </main>
          </Router>
        </header>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
      login: user => dispatch( userActions.login(user) ),
      createUser: user => dispatch(userActions.createUser(user)),
      getAll: () => dispatch(userActions.getAll()),
      logout: () => dispatch(userActions.logout()),
  }
} 
export default connect(null, mapDispatchToProps)(App)
