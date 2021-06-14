import React from 'react';
import Genus from './Genus';

class GenusList extends React.Component {

    render() {
        const { genera, addGenusToUser } = this.props;

        const genusList = ( (genera?.genera) ? genera.genera.map( genus => {
            return (
                <Genus
                    key = {genus.id}
                    genus = {genus}
                    addGenusToUser = {addGenusToUser}
                />
            )
        }) : ( <p>loading</p>));
        return(
            <div className="genus-list">
                {genusList}
            </div>
        )
    }
}

export default GenusList