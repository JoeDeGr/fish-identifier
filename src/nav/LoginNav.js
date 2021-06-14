import React from 'react';
import { NavLink } from 'react-router-dom';

 const LoginNav = () => {
    return (
        <nav>
            <NavLink to="/newuser">Create A New Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    );
};

export default LoginNav