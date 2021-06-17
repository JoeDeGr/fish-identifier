import React from 'react';

const Species = ({ species, addSpeciesToUser, removeSpecies }) => {
        return(
            <div className="species-show">
                <h3>{species.common_name}</h3>
                <ul>
                    <li>Species Database id: {species.id}</li>
                    <li>Scientific Name: {species.scientific_name}</li>
                    <li>Typical size: {species.size}</li>
                    <li>Habitat: {species.habitat}</li>
                    <li>Distribution: {species.distribution}</li>
                    <li>Game Qualities: {species.game_qualities}</li>
                    <li>Description: {species.description}</li>
                    {((!!addSpeciesToUser) ? <button onClick={() => addSpeciesToUser(species)}>Add Me To Your List!</button> : <></> )}
                    {(!!removeSpecies) ? (<button onClick={() => removeSpecies(species)}>Remove Me From Your List!</button>) : <></>}
                </ul>
            </div>
        )
    }

export default Species