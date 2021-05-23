import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './nav/NavBar'
// import Login from './containers/Login';
import Users from './containers/Users';
import Genus from "./containers/Genus";
import Species from "./containers/Species";
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch, Redirect, useLocation, useHistory } from 'react-router-dom';

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
                  <p>I'm Home.</p>
                </Route>
                <Route path="/Genus">
                    <Genus/>
                </Route>
                <Route path="/login">
                    <UserLogin/> 
                </Route>
                <Route path="/species">
                  <Species/>
                </Route>
                <PrivateRoute>
                  <Users/>
                  <AuthButton/>
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

function UserLogin () {
  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = React.useState(false)

  const { state } = useLocation()

  const login = () => fakeAuth.authenticate(() => {
    setRedirectToReferrer(true)
  })

  if (redirectToReferrer === true) {
    return <Redirect to={ state?.from || '/' } />
  }

  return (
    <div>
      {/* <Login/> */}
      <p> You must log in to view the page </p>
      <button onClick={login}>log in</button>
    </div>
  )
}

function AuthButton () {
  const history = useHistory();

  // function handleOnClick() {
  //   console.log(fakeAuth)
  //   fakeAuth.signout(() => history.push('/'));
  //   console.log(fakeAuth)
  // }

  if (fakeAuth.isAuthenticated === true) { 
      return <p> <button onClick = {() => {fakeAuth.signout(() => history.push('/'))}}>Sign out</button> </p>}
  else{ 
    return <p> Please Log In </p>
  }
  

}
