import React from 'react';
import { connect } from 'react-redux';

function Logout ({logout}) {
    return(
        <button onClick={() => { logout() }}>Log Out!</button>
    )
}

export default connect()(Logout)