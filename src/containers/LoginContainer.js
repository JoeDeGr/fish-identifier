import React, { Component } from 'react';
import LoginNav from '../nav/LoginNav'
import NewUserInput from '../components/User/NewUserInput';
import UserLogin from '../components/User/UserLogin';
import {userActions} from '../actions/userActions';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class LoginContainer extends Component {

    render() {
        // const createUser = (data) => { 
        //     localStorage.setItem('user', JSON.stringify(data.user))
        // };
        // const setToken = (data) => {localStorage.setItem('token', JSON.stringify(data.user.jwt))};

        // const get = (options, location) => {
        //     fetch('http://localhost:3000' + location, options)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         console.log(data);
        //         createUser(data);
        //         setToken(data);
        //         // <Redirect to={{pathname: '/user' }}/>
                
        //     })
        // }
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


const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch( userActions.login(user) ),
        createUser: user => dispatch(userActions.createUser(user)),
    }
} 

export default connect( null,mapDispatchToProps )(LoginContainer)