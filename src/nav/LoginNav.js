import React from 'react';
import { NavLink } from 'react-router-dom';

 const LoginNav = () => {
    return (
        <>
            <NavLink to="/newuser">Create A New Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
        </>
    );
};

export default LoginNav