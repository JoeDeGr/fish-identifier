import React from 'react';
import Species from '../Species/Species'
import { connect } from 'react-redux'

class UserSpecies extends React.Component {

    render() {
 
        const { userSpecies } = this.props;
        const speciesList = userSpecies.map( species => {
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
        });
        return(
            <div> 
                <ul>
                    {speciesList}
                    {!!(speciesList === null ) ? speciesList : "Add Some Species to You Life!"}
                </ul>
            </div>
            
        )
    }
}

export default  connect ()(UserSpecies)