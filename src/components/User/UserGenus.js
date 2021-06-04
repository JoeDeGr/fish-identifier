import React from 'react';
import Genus from '../Genus/Genus'
import { connect } from 'react-redux'

class UserGenus extends React.Component {

    render() {
 
        const { userGenus } = this.props;
        const genusList =  userGenus.map( genus => {
            return( 
            <li id={genus.id}>
                <Genus
                    key = {genus.id}
                    genus = {genus}
                    // addGenusToUser = {addGenusToUser}
                    // removeGenus = {removeGenus}
                />
            </li>
            )
        })
        return(
            <div> 
                <ul>
                    {!!(genusList === null ) ? genusList : "Add Some Genus to You Life!"}
                </ul>
            </div>
        )
    }
}

export default  connect ()(UserGenus)