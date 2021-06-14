import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <div className = "navBar-user">
            <nav>
                <NavLink to='/users/genus'>My Genus</NavLink>
                <NavLink to='/users/species'>My Species</NavLink>
                <NavLink to='/users/myphotos'>My Photos</NavLink>
                <NavLink to='users/update'>Update My Info</NavLink>
             </nav>
        </div>
    )
}

export default UserNav;