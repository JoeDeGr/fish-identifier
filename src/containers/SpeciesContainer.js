import React, { Component } from 'react';
import SpeciesList from '../components/Species/SpeciesList';
import { appActions } from '../actions/appActions'
import { connect } from 'react-redux'
import { whatIsASpecies } from '../helpers/descriptions'

class SpeciesContainer extends Component {

    componentDidMount(){
        this.props.loadSpecies()
    };

    render () {
        return (
            <div>
                <sub className="sub-heading">
                    <h1>Species</h1>
                    <p>{whatIsASpecies}</p>
                </sub>
                <div className="species-list">
                    <SpeciesList
                        specy={this.props.specy}
                        addSpeciesToUser = { this.props.addSpeciesToUser }
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({ specy: state.species })

const mapDispatchToProps = dispatch => ({
    addSpeciesToUser: species_id => dispatch({ type: 'ADD_SPECIES_TO_USER', species_id }),
    loadSpecies: () => dispatch(appActions.loadSpecies())
})

export default connect( mapStateToProps, mapDispatchToProps )(SpeciesContainer)