import React, { Component } from 'react';
import SpeciesList from '../components/Species/SpeciesList';
import { connect } from 'react-redux'

class SpeciesContainer extends Component {
    
    componentDidMount(){
        
    }

    render () {
        return (
            <div>
                <p> From You I Exists. </p>
                <SpeciesList
                    specy={this.props.specy}
                    addSpeciesToUser = { this.props.addSpeciesToUser }
                />
            </div>
        );
    };
}

const mapStateToProps = state => ({ specy: state.species})

const mapDispatchToProps = dispatch => ({
    addSpeciesToUser: species_id => dispatch({ type: 'ADD_SPECIES_TO_USER', species_id })
})

export default connect( mapStateToProps, mapDispatchToProps )(SpeciesContainer)