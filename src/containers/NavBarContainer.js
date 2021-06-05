import React from 'react';
import LoginNav from '../nav/LoginNav'
import NavBar from '../nav/NavBar';
import Logout from '../components/User/Logout'
import { connect } from 'react-redux'

function NavBarContainer(props) {
    // const tokenValue = props.userToken.checkLogin()

    return (
        <div classname='navbar'>
            <NavBar/>
            { !(props.userToken.checkLogin()) ? (<LoginNav />) : (<Logout logout={props.logout} />) }
        </div>
    )
}

export default connect()(NavBarContainer)
