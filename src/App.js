import React from 'react';
import logo from './logo.svg';
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
import { userToken } from './helpers/token';
import NewUserInput from './components/User/NewUserInput';
import UserLogin from './components/User/UserLogin';
// import UserGenus from './components/User/UserGenus';
// import UserSpecies from './components/User/UserSpecies';

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
    const token = userToken.checkLogin()
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
              <NavBarContainer userToken = {userToken} logout={this.props.logout} />
              <Switch>
                <Route path="/home">
                  <Home/>
                </Route>
                <Route path="/Genus">
                    <GenusContainer/>
                </Route>
                <Route path="/newuser">
                    <NewUserInput createUser = {this.props.createUser}/>
                </Route>
                <Route path="/login">
                    <UserLogin login = { this.props.login } />
                </Route>
                <Route path="/species">
                  <SpeciesContainer/>
                </Route >
                <PrivateRoute path="/user">
                  <Users />
                </PrivateRoute>
                {/* <PrivateRoute path='/users/genus'>
                    <UserGenus userGenus={this.props.user.userGenus}/>
                </PrivateRoute>
                <PrivateRoute path ='/users_species'>
                    <UserSpecies userSpecies={this.props.user.user_species}/>
                </PrivateRoute> */}
                {/* <PrivateRoute path='users/myphotos'>
                    <UserPhotos/>
                    <p>Coming Soon! Your Photos!</p>
                </PrivateRoute>
                <PrivateRoute path='user/update'>
                    <UserUpdateForm/>
                    <p>So... You Wanna Change Your Info, huh?</p>
                </PrivateRoute> */}
              </Switch>
            </main>
          </Router>
        </header>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { 
//     user: state.users.user
//   }
// }

const mapDispatchToProps = dispatch => {

  return {
      login: user => dispatch( userActions.login(user) ),
      createUser: user => dispatch(userActions.createUser(user)),
      getAll: () => dispatch(userActions.getAll()),
      logout: () => dispatch(userActions.logout()),
  }
} 

export default connect( null, mapDispatchToProps )(App)
