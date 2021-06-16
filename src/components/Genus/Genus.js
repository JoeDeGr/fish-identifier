import React from 'react';

const Genus=({genus, addGenusToUser, removeGenus}) => {

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
                {(!!addGenusToUser) ? (<button onClick={() => addGenusToUser(genus)}>Add Me To Your List!</button>) : <></>}
                {(!!removeGenus) ? (<button onClick={() => removeGenus(genus)}>Remove Me From Your List!</button>) : <></>}
            </ul>
        </div>
    )
}

export default Genus