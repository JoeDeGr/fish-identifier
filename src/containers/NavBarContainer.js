import React from 'react';
import UserNav from '../nav/UserNav';
import LoginNav from '../nav/LoginNav'
import NavBar from '../nav/NavBar';
import { connect } from 'react-redux'

function NavBarContainer(props) {
    const { checkLogin } = props
    debugger
    return (
        <div classname='navbar'>
            <NavBar/>
            {!!(checkLogin === null) ? (<LoginNav />) : (<UserNav/>)  }
        </div>
    )
}

export default connect()(NavBarContainer)
