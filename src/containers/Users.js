import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import UserNav from '../nav/UserNav';

class UsersContainer extends Component {
    render() {
        return(
            <div>
                <h1>You are here. We are now.</h1>
                <UserNav/>
                <User/>
            </div>
        )
    }
}

export default connect()(UsersContainer)