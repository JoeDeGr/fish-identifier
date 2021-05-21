import React from 'react';
import { NavLink } from 'react-router-dom';

 const LoginNav = () => {
    return (
        <div classname = 'loginNav'>
            <nav>
            <h1> Welcome! </h1>
                <ul>
                    <NavLink to="/newuser">Create A New Profile</NavLink><br></br>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default LoginNav