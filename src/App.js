import React, { useEffect } from 'react';
import carpface from './images/carpface.JPG';
import './App.css';
import NavBarContainer from './containers/NavBarContainer';
import PrivateRoute  from './components/PrivateRoute';
import Users from './containers/UsersContainer';
import GenusContainer from "./containers/GenusContainer";
import SpeciesContainer from "./containers/SpeciesContainer";
import Home from "./containers/Home";
import { history } from './helpers/history';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from './actions/userActions';
import NewUserInput from './components/User/NewUserInput';
import UserLogin from './components/User/UserLogin';
// import Modal from './comoponents/Modal';


function App({loggedIn, logout, login, createUser, getAll, updateUser, addSpeciesToUser, addGenusToUser }) {
  

  useEffect(() => {
      const token = localStorage.getItem('token')
    if (!!token || (token === "undefined")){
      // this.interval = setInterval(this.update, 1000);
      // getAll()
    }
  });

  return (
    <div className="app">
        <Router history = { history }>
          <header className="app-header">
            <img src={carpface} className="app-logo" alt="logo" />
            <NavBarContainer loggedIn={ loggedIn } logout={ logout } />
          </header>
          <body className="app-body">
            <Switch>
              <Route path="/home">
                <Home/>
              </Route>
              <Route path="/genus">
                  <GenusContainer addGenusToUser={ addGenusToUser } />
              </Route>
              <Route path="/newuser">
                  <NewUserInput createUser = { createUser }/>
              </Route>
              <Route path="/login">
                  <UserLogin login = { login } />
              </Route>
              <Route path="/species">
                <SpeciesContainer addSpeciesToUser={ addSpeciesToUser }/>
              </Route >
              <PrivateRoute path="/user">
                <Users updateUser={updateUser} />
              </PrivateRoute>
            </Switch>
          </body>
        </Router>
        
    </div>
  );
}


const mapStateToProps = state => {
  return{
    user: state.user,
    loggedIn: state.users.loggedIn
  }
}
const mapDispatchToProps = dispatch => {

  return {
      login: user => dispatch( userActions.login(user) ),
      createUser: user => dispatch(userActions.createUser(user)),
      getAll: () => dispatch(userActions.getAll()),
      logout: () => dispatch(userActions.logout()),
      updateUser: user => dispatch(userActions.updateUser(user)),
      addSpeciesToUser: species  => dispatch(userActions.addSpeciesToUser(species)),
      addGenusToUser: genus => dispatch(userActions.addGenusToUser(genus))
  }
} 

export default connect( mapStateToProps, mapDispatchToProps )(App)
