import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//create a private route to wrap components we want hidden.
// export const PrivateRoute = ({ component: Component, ...rest }) => (

//     <Route {...rest} render={props => (
//         localStorage.getItem('token')
//         ? <Component {...props} />
//         : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
//         )}/>
// )

function PrivateRoute ({ children, ...rest }){
      return(
        <Route {...rest} render={({ location }) => {
          return localStorage.getItem('token') 
          ? children : 
          <Redirect to={{ 
            pathname: '/login',
            state:{ from: location }
            }}
          />
        }}/>
      )
    }

    export default PrivateRoute