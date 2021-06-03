import React from 'react';
import Species from '../Species/Species'

class UserSpecies extends React.Component{

    render() {
        debugger 
        const { userSpecies } = this.props;
        const speciesList = userSpecies.map( species => {
            debugger
            return(
                <Species
                    key = {species.id}
                    species = {species}
                    // addSpeciesToUser = {addSpeciesToUser}
                />
            )
        });
        return(
            <div> 
                <ul>
                    <p>Comming Soon!</p>
                    {speciesList}
                </ul>
            </div>
            
        )
    }
}

export default  UserSpecies