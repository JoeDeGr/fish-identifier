import React from 'react';
import LoginNav from '../nav/LoginNav'
import NavBar from '../nav/NavBar';
import { connect } from 'react-redux'

function NavBarContainer ({loggedIn, logout}) {


//     function navBarComponent (props) => {
//     if (props.userToken.checkLogin() === null ){
//         return 
//     }
//         return (<Logout logout = {this.props.logout} />)
// }

    // componentDidMount() {
        
    // // const token = this.props.userToken.checkLogin()
    // }
    // handleLogout = () => {
    //     props.logout()
    // }
    
    // render () {
    
    let navBarItems;
    if ( !!loggedIn ) {
        debugger
        navBarItems = <button onClick={() => { logout() }}>Log The f*$% Out!</button>
    } else {
        debugger
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