import React from 'react';

export default function Logout (props) {
    return(
        <button onClick={() => { props.logout() }}>Log The f*$% Out!</button>
    )
}