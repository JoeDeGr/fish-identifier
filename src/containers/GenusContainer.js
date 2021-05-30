import React, { Component } from 'react';
import GenusList from '../components/Genus/GenusList';
import { connect } from 'react-redux';

class GenusContainer extends Component{
    debugger
    render() {
        return (
            <div>
                <p>I Too Exists.</p>
                <GenusList 
                    genuses={this.props.genuses}
                    addGenusToUser={this.props.addGenusToUser}
                />
            </div>
        );
    };
}
const mapStateToProps = state => ({genuses: state.genuses })

const mapDispatchToProps = dispatch => ({
    addGenusToUser: genus_id => dispatch({ type: 'ADD_GENUS_TO_USER', genus_id})
})


export default connect(mapStateToProps, mapDispatchToProps )(GenusContainer)