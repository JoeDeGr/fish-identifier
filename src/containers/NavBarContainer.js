import React from 'react';
import LoginNav from '../nav/LoginNav'
import StaticNav from '../nav/StaticNav';
import { connect } from 'react-redux';
// import Navbar from 'react-bootstrap/Navbar'

function NavBarContainer ({loggedIn, logout}) {
    
    let navBarItems;

    if ( !!loggedIn ) {

        navBarItems = <button onClick={() => { logout() }}>Log Out!</button>

    } else {

        navBarItems = <LoginNav />
    }
        return (
            <div className='navBar'>
                {/* <NavBar> */}
                    <StaticNav/>
                    { navBarItems }
                {/* </NavBar> */}
            </div>
        )
    }

export default connect()(NavBarContainer)