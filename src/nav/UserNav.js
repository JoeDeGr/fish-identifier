import React from 'react';
import { NavLink } from 'react-router-dom';

const UserNav = () => {
    return (
        <div className = "userNav">
            <nav>
                <NavLink to='/users/genus'>My Genus</NavLink><br></br>
                <NavLink to='/users_species'>My Species</NavLink><br></br>
                <NavLink to='/users/myphotos'>My Photos</NavLink><br></br>
             </nav>
        </div>
    )
}

export default UserNav;