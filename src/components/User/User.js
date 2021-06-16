import React from 'react';
import { connect } from 'react-redux';


function User () {
    return(
        <div>
            <p>I exists. I will compile/show a list of current uploads/posts</p>
        </div>
    )
}

export default connect()(User)