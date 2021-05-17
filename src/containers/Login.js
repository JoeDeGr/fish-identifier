import React, { Component } from 'react';
import NewUserInput from '../components/NewUserInput';
import UserLogin from '../components/UserLogin';
import { connect } from 'react-redux'

class Login extends Component {
    render() {
        return(
            <div>
                <NewUserInput/>
                <UserLogin/>
            </div>
        );
    }
}

export default connect()(Login)