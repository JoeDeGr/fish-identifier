import React, { Component } from 'react';
import SpeciesList from '../components/Species/SpeciesList';
import { appActions } from '../actions/appActions'
import { connect } from 'react-redux'
import { whatIsASpecies } from '../helpers/descriptions'

class SpeciesContainer extends Component {

    handleAddSpeciesToUser (species) {
        debugger
        this.props.addSpeciesToUser(species)
        debugger
    }

    componentDidMount(){
        this.props.loadSpecies()
    };
    
    render () {
        const{ specy} = this.props
        return (
            <div>

                <sub className="sub-heading">
                    <h1>Species</h1>
                    <p>{whatIsASpecies}</p>
                </sub>
                <div className="species-list">
                    <SpeciesList
                        specy={specy}
                        addSpeciesToUser = { this.handleAddSpeciesToUser }
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
    user: state.users.user,
    specy: state.species
    }
}

const mapDispatchToProps = dispatch => ({
    loadSpecies: () => dispatch(appActions.loadSpecies())
})

export default connect( mapStateToProps, mapDispatchToProps )(SpeciesContainer)