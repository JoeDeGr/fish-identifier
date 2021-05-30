import React from 'react';
import Genus from './Genus';

class GenusList extends React.Component {
    debugger

    render() {
        const { genuses, addGenusToUser } = this.props;
        const genusList = genuses.map( genus => {
            return (
                <Genus
                    key = {genus.id}
                    genus = {genus}
                    addGenusToUser = {addGenusToUser}
                />
            )
        });
        return(
            <ul>
                {genusList}
            </ul>

        )
    }
}

export default GenusList