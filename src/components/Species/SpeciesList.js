import React from 'react';
import Species from './Species'

class SpeciesList extends React.Component {

    render() {
        const { specy, addSpeciesToUser } = this.props;
        const speciesList = specy.map( species => {
            return(
                <Species
                    key = {species.id}
                    species = {species}
                    addSpeciesToUser = {addSpeciesToUser}
                />
            )
        });
        return(
            <ul>
                {speciesList}
            </ul>
        )
    }
}

export default SpeciesList