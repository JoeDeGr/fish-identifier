import React from 'react';

class Genus extends React.Component {

    handleOnClick() {
        this.props.addGenusToUser(this.props.genus.id)
    }

    render() {
        const { genus } = this.props

        return(
            <div className="genus-show">
                <h3 className="genus-commonName">{genus.common_name}</h3>
                <ul>
                    <li>Genus Database id: {genus.id}</li>
                    <li>Genus Scientific Name: {genus.scientific_name}</li>
                    <li>Family: {genus.family}</li>
                    <li>Order: {genus.order}</li>
                    <li>Typical Habitat: {genus.habitat}</li>
                    <li>Typical Size: {genus.size}</li>
                    <li>Game Qualities: {genus.game_qualities}</li>
                    <li>Description: {genus.description}</li>
                    <button onClick={(e) => this.handleOnClick(e)}>Add Me To Your List!</button>
                </ul>
            </div>
        )
    }
}

export default Genus