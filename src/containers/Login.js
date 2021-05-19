import React, { Component } from 'react';
import NewUserInput from '../components/NewUserInput';
import UserLogin from '../components/UserLogin';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class Login extends Component {
    render() {
        return(
            <div>
                <Router>
                    <div class="login">
                        <nav>
                            <h1> Welcome! </h1>
                            <ul>
                                <Link to="/newuser">Create A New Profile</Link><br></br>
                                <Link to="/login">Login</Link>
                            </ul>
                        </nav>
                    </div>
                    <Switch>
                        <Route path='/newuser'>
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

export default connect()(Login)