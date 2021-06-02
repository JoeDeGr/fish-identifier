import React, { Component } from 'react';
import LoginNav from '../nav/LoginNav'
import NewUserInput from '../components/User/NewUserInput';
import UserLogin from '../components/User/UserLogin';
import {userActions} from '../actions/userActions'
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class LoginContainer extends Component {

    render() {
        const createUser = (data) => { 
            localStorage.setItem('user', JSON.stringify(data))
        };
        const setToken = (data) => { localStorage.setItem('token', JSON.stringify(data))};
        return(
            <div>
                <Router>
                    <LoginNav/>
                    <Switch>
                        <Route path="/newuser">
                            <NewUserInput createUser={ createUser } setToken = {setToken}/>
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



export default connect()(LoginContainer)