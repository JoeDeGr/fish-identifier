import React from 'react';
import Species from '../Species/Species'
import { connect } from 'react-redux'

function UserSpecies ({userSpecies}) {

    const speciesList = ( (!!userSpecies) ? userSpecies.map( species => {
        return(
        <li id={species.id}>
            <Species
                key = {species.id}
                species = {species}
                // addSpeciesToUser = {addSpeciesToUser}
                // removeSpecies = {removeSpecies}
            />
        </li>
        )
    }) : (<p>Add Some <a href="/species">Species!</a></p>));
    return(
        <div> 
            <ul>
                {speciesList} 
            </ul>
        </div>
        
    )
}

export default  connect ()(UserSpecies)