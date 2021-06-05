import React from 'react';
import { NavLink } from 'react-router-dom';

 const LoginNav = () => {
    return (
        <div className = 'loginNav'>
            <nav>
                <ul>
                    <NavLink to="/newuser">Create A New Profile</NavLink><br></br>
                    <NavLink to="/login">Login</NavLink>
                </ul>
            </nav>
        </div>
    );
};

export default LoginNav