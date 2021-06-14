import React from 'react';
import { NavLink } from 'react-router-dom';

const StaticNav = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/genus">Genus</NavLink>
      <NavLink to="/species">Species</NavLink>
      <NavLink to="/user">My Stuff</NavLink>
    </nav>
  );
} ;

export default StaticNav;