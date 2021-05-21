import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
 return (
     <div className = "navBar">
         <nav className = "navBar">
                <ul>
                  <NavLink to="/home">Home</NavLink><br></br>
                  {/* <NavLink to="/login">Login</NavLink><br></br> */}
                  <NavLink to="/genus">Genus</NavLink><br></br>
                  <NavLink to="/species">Species</NavLink><br></br>
                  <NavLink to="/user">User</NavLink><br></br>
                </ul>
        </nav>
     </div>
 );
} ;

export default NavBar;