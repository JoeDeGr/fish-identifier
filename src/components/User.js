import React, { Component } from 'react';
import { connect } from 'react-redux';


class User extends Component {
    render(){
        return(
            <div>
                <p>I exists.</p>
            </div>
        )
    }
}

export default connect()(User)