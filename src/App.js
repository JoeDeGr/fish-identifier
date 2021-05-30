import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './nav/NavBar';
import LoginContainer from './containers/LoginContainer';
import Users from './containers/UsersContainer';
import GenusContainer from "./containers/GenusContainer";
import SpeciesContainer from "./containers/SpeciesContainer";
import Home from "./containers/Home"
import { history } from './helpers/history';
// import { connect } from 'react-redux'
import { Router, Route, Switch, Redirect } from 'react-router-dom';

export default function App () {
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
                    <LoginContainer/> 
                </Route>
                <Route path="/species">
                  <SpeciesContainer/>
                </Route>
                <PrivateRoute>
                  <Users/>
                  <Signout/>
                </PrivateRoute>
              </Switch>
            </main>
          </Router>
        </header>
        
        
      </div>
    );
  };

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

function PrivateRoute ({ children, ...rest }){
  return(
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true 
      ? children : 
      <Redirect to={{ 
        pathname: '/login',
        state:{ from: location }
        }}
      />
    }}/>
  )
}

// function UserLogin () {
//   const [
//     redirectToReferrer,
//     setRedirectToReferrer
//   ] = React.useState(false)

//   const { state } = useLocation()

//   const login = () => fakeAuth.authenticate(() => {
//     setRedirectToReferrer(true)
//   })

//   if (redirectToReferrer === true) {
//     return <Redirect to={ state?.from || '/' } />
//   }

//   return (
//     <div>
//       {/* <LoginContainer/> */}
//       <p> You must log in to view the page </p>
//       <button onClick={login}>log in</button>
//     </div>
//   )
// }

function Signout () {
  
  console.log(history)

  // function handleOnClick() {
  //   console.log(fakeAuth)
  //   fakeAuth.signout(() => history.push('/'));
  //   console.log(fakeAuth)
  // }

  if (fakeAuth.isAuthenticated === true) { 
      return <p> <button onClick = {() => {fakeAuth.signout(() => history.push('/'))}}>Sign out</button> </p>}
  else{ 
    return <p> Please Reload this screen. </p>
  }
  

}
