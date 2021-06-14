import React, { Component } from 'react';
import GenusList from '../components/Genus/GenusList';
import { appActions } from '../actions/appActions';
import { whatIsAGenus } from '../helpers/descriptions'
import { connect } from 'react-redux'

class GenusContainer extends Component{

    componentDidMount(){
        this.props.loadGenera()
    }

    render() {
        return (
            <div>
                <sub className="sub-heading">
                    <h1>Genus</h1>
                    <p className="genus-whatIs">{whatIsAGenus}</p>
                </sub>
                <div className="genus-list">
                    <GenusList 
                        genera={this.props.genera}
                        addGenusToUser={this.props.addGenusToUser}
                    />
                </div>
            </div>
        );
    };
}
const mapStateToProps = state => ({genera: state.genera })

const mapDispatchToProps = dispatch => ({
    addGenusToUser: genus_id => dispatch({ type: 'ADD_GENUS_TO_USER', genus_id}),
    loadGenera: () => dispatch(appActions.loadGenera())
})


export default connect(mapStateToProps, mapDispatchToProps )(GenusContainer)