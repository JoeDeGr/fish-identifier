import React from 'react';
import Species from '../Species/Species'
import { connect } from 'react-redux'

function UserSpecies ({userSpecies}) {
    const speciesList = ( (!!userSpecies) ? userSpecies.map( species => {
        return(
        <div id={species.id}>
            <Species
                key = {species.id}
                species = {species}
                // addSpeciesToUser = {addSpeciesToUser}
                // removeSpecies = {removeSpecies}
            />
        </div>
        )
    }) : (<p>Add Some <a href="/species">Species!</a></p>));
    return(
        <ul>
            {speciesList} 
        </ul>
    )
}

export default  connect()(UserSpecies)