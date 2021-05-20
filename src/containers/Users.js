import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../components/User'

class UsersContainer extends Component {
    render() {
        return(
            <div>
                <p>I exists!</p>
                <User/>
            </div>
        )
    }
}

export default connect()(UsersContainer)