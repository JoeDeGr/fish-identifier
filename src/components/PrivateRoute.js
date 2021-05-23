import React from 'react';
import {Route, Redirect, useLocation } from 'react-router-dom';
//create a private route to wrap components we want hidden.
export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        localStorage.getItem('user')
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
)