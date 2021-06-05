import React, { Component } from 'react';
import LoginNav from '../nav/LoginNav'
import NewUserInput from '../components/User/NewUserInput';
import UserLogin from '../components/User/UserLogin';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class LoginContainer extends Component {

    render() {
        return(
            <div>
                <Router>
                    <LoginNav/>
                    <Switch>
                        <Route path="/newuser">
                            <NewUserInput createUser = {this.props.createUser}/>
                        </Route>
                        <Route path="/login">
                            <UserLogin login = { this.props.login } />
                        </Route>
                    </Switch>
                </Router> 
            </div>
        );
    }
}

export default connect()(LoginContainer)