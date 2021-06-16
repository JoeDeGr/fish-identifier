import React from 'react';
import { connect } from 'react-redux';


function User () {
    return(
        <div>
            <h3>I exists.</h3>
            <p> Eventually I will compile/show a list of current uploads/posts</p>
        </div>
    )
}

export default connect()(User)