import React, { Component } from 'react';
import User from '../components/User/User';
import UserGenus from '../components/User/UserGenus';
import UserSpecies from '../components/User/UserSpecies';
import UserNav from '../nav/UserNav';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { Router, Route, Switch } from 'react-router-dom';
import { userActions } from '../actions/userActions'

class UsersContainer extends Component {

    handleOnClick = () => {
        this.props.logout()
    } 
    render() {
        return(
            <div>
                <button onClick={(e) => {this.handleOnClick(e)}}>Log The f*$% Out!</button>
                <h1>You are here. We are now.</h1>
                <Router history = { history }>
                    <UserNav />
                    <Switch>
                        <Route path='/user/genus'>
                            {/* <UserGenus userGenus={this.props.user.genuses}/> */}
                            <UserGenus />
                        </Route>
                        <Route path ='user/species'>
                            {/* <UserSpecies userSpecies={this.props.user.species}/> */}
                            <UserSpecies />
                        </Route>
                        <Route path='user/myphotos'>
                            {/* <UserPhotos/> */}
                            <p>Coming Soon! Your Photos!</p>
                        </Route>
                        <Route path='user/update'>
                            {/* <UserUpdateForm/> */}
                            <p>So... You Wanna Change Your Info, huh?</p>
                        </Route>
                    </Switch>
                </Router>
                <User user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => ({ user: state.user })

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(userActions.logout())
    }
}


export default connect( mapStateToProps, mapDispatchToProps)(UsersContainer)