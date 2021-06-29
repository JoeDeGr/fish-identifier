import React from 'react';
import Species from '../Species/Species'
import { connect } from 'react-redux'

function UserSpecies ({userSpecies, removeSpecies}) {
    const speciesList = ( (!!userSpecies && userSpecies != "") ? userSpecies.map( species => {
        return(
        <div id={species.id}>
            <Species
                key = {species.id}
                species = {species}
                removeSpecies = {removeSpecies}
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