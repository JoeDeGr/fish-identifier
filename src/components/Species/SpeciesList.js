import React from 'react';
import Species from './Species'

class SpeciesList extends React.Component {

    render() {
        const { specy, addSpeciesToUser } = this.props;
        const speciesList = ( (specy?.species) ? specy.species.map( species => {
            return(
                <Species
                    key = {species.id}
                    species = {species}
                    addSpeciesToUser = { addSpeciesToUser }
                />
            ) 
        }) : ( <p>Loading</p> ));
        return(
            <div className="species-list">
                {speciesList}
            </div>
        )
    }
}

export default SpeciesList