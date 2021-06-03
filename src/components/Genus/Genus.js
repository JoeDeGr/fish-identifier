import React from 'react';

class Genus extends React.Component {

    handleOnClick() {
        this.props.addGenusToUser(this.props.genus.id)
    }

    render() {
        const { genus } = this.props

        return(
            <div>
                <li>
                    <h3>{genus.name}</h3>
                    <ul>
                        <li>Genus Database id: {genus.id}</li>
                        <li></li>
                        <br></br>
                        <button onClick={(e) => this.handleOnClick(e)}>Add Me To Your List!</button>
                    </ul>
                </li>
            </div>
        )
    }
}

export default Genus