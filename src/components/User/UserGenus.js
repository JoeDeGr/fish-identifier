import React from 'react';
import Genus from '../Genus/Genus'
import { connect } from 'react-redux'

function UserGenus ({userGenus}){

    const genusList =  ((!!userGenus) ? userGenus.map( genus => {
        return( 
        <li id={genus.id}>
            <Genus
                key = {genus.id}
                genus = {genus}
                // addGenusToUser = {addGenusToUser}
                // removeGenus = {removeGenus}
            />
        </li>
        )
    }) : (<p>Add Some <strong><a href="/genus">Genera</a></strong> to your life! </p>));
    return(
        <div> 
            <ul>
                {genusList}
            </ul>
        </div>
    )
}

export default  connect ()(UserGenus)