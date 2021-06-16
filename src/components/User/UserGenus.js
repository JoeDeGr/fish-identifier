import React from 'react';
import Genus from '../Genus/Genus'
import { connect } from 'react-redux'

function UserGenus ({userGenus}){

    const genusList =  ((!!userGenus) ? userGenus.map( genus => {
        return( 
        <div id={genus.id}>
            <Genus
                key = {genus.id}
                genus = {genus}
                // removeGenus = {removeGenus}
            />
        </div>
        )
    }) : (<p>Add Some <strong><a href="/genus">Genera</a></strong> to your life! </p>));
    return(
        <ul>
            {genusList}
        </ul>
    )
}

export default  connect ()(UserGenus)