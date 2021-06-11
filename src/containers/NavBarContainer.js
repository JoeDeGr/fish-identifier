import React from 'react';
import LoginNav from '../nav/LoginNav'
import NavBar from '../nav/NavBar';
import { connect } from 'react-redux'

function NavBarContainer ({loggedIn, logout}) {
    
    let navBarItems;

    if ( !!loggedIn ) {
        
        navBarItems = <button onClick={() => { logout() }}>Log The f*$% Out!</button>

    } else {

        navBarItems = <LoginNav />
    }
        return (
            <div classname='navbar'>
                <NavBar/>
                { navBarItems }
            </div>
        )
    }

export default connect()(NavBarContainer)