import React from 'react';

class Species extends React.Component {

    handleOnClick() {
        this.props.addSpeciesToUser(this.props.species.id)
    }

    render() {
        const { species } = this.props

        return(
            <div>
                <ul>
                    <lh>{species.common_name}</lh>
                    <li>Species Database id: {species.id}</li><br></br>
                    <li>Scientific Name: {species.scientific_name}</li>
                    <li>Habitat: {species.habitat}</li>
                    <li>Distribution: {species.distribution}</li>
                    <li>Game Qualities: {species.game_qualities}</li>
                    <li>Description: {species.description}</li>
                    <button onClick={(e) => this.handleOnClick(e)}>Add Me To Your List!</button>
                </ul>
            </div>
        )
    }
}

export default Species