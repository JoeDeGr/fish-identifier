import React from 'react';

class Species extends React.Component {

    handleOnClick() {
        this.props.addSpeciesToUser(this.props.species.id)
    }

    render() {
        const { species } = this.props

        return(
            <div>
                <li>
                    <h3>{species.name}</h3>
                    <ul>
                        <li>Species Database id: {species.id}</li><br></br>
                        <button onClick={(e) => this.handleOnClick(e)}>Add Me To Your List!</button>
                    </ul>
                </li>
            </div>
        )
    }
}

export default Species