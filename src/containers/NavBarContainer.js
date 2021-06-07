import React from 'react';
import LoginNav from '../nav/LoginNav'
import NavBar from '../nav/NavBar';
// import Logout from '../components/User/Logout'
import { connect } from 'react-redux'

function NavBarContainer (props) {


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
    if (props.loggedIn){
        debugger
        navBarItems = <button onClick={() => { props.logout() }}>Log The f*$% Out!</button>
        // navBarItems = <Logout logout = {this.props.logout} />
    } else {
        debugger
        navBarItems = <LoginNav />
        debugger
    }
        return (
            <div classname='navbar'>
                <NavBar/>
                { navBarItems }
            </div>
        )
    }
// }

// const mapStateToProps = state => {
//     return {
//         loggedIn: state.users.loggedIn
//     }
// }

export default connect()(NavBarContainer)

// function navBarComponent (props) => {
//     if (props.userToken.checkLogin() === null ){
//         return <LoginNav /> 
//     }
//         return (<Logout logout = {this.props.logout} />)
// }