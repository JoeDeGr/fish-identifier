import React, { Component } from 'react';
import LoginNav from '../nav/LoginNav'
import NewUserInput from '../components/NewUserInput';
import UserLogin from '../components/UserLogin';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class LoginContainer extends Component {
    render() {
        return(
            <div>
                <Router>
                    <LoginNav/>
                    <Switch>
                        <Route path="/newuser">
                            <NewUserInput/>
                        </Route>
                        <Route path="/login">
                            <UserLogin/>
                        </Route>
                    </Switch>
                </Router> 
            </div>
        );
    }
}

export default Login