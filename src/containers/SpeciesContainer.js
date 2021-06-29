import React, { Component } from 'react';
import SpeciesList from '../components/Species/SpeciesList';
import { appActions } from '../actions/appActions'
import { connect } from 'react-redux'
import { whatIsASpecies } from '../helpers/descriptions'

class SpeciesContainer extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    componentDidMount(){
        this.props.loadSpecies()
    };
    
    render () {
        return (
            <div>
                <sub className="sub-heading">
                    <h1>Species</h1>
                    <p>{ whatIsASpecies }</p>
                </sub>
                <label>How Many Likes Would You Like to add? </label> 
                <input 
                    name = "count"
                    type = "text"
                    onChange = {(e) => this.handleOnChange(e)}
                    value = { this.state.count }
                />
                <div className="species-list">
                    <SpeciesList
                        specy={this.props.specy}
                        addSpeciesToUser = { this.props.addSpeciesToUser }
                        count = {this.state.count}

                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
    specy: state.species
    }
}

const mapDispatchToProps = dispatch => ({
    loadSpecies: () => dispatch(appActions.loadSpecies())
})

export default connect( mapStateToProps, mapDispatchToProps )(SpeciesContainer)