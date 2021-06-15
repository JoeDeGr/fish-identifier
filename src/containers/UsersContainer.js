import React, { Component } from 'react';
import User from '../components/User/User';
import UserGenus from '../components/User/UserGenus';
import UserSpecies from '../components/User/UserSpecies';
import UserUpdateForm from '../components/User/UserUpdateForm'
import UserNav from '../nav/UserNav';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class UsersContainer extends Component {
    
    render() {
        return(
            <div>
                <h1>You are here. We are now.</h1>
                <Router history = { history }>
                    <UserNav />
                    <Switch>
                        <Route path='/users/genus'>
                            <UserGenus userGenus={this.props.user_genus}/>
                        </Route>
                        <Route path ='/users/species'>
                            <UserSpecies userSpecies={this.props.user_species}/>
                        </Route>
                        <Route path='/users/myphotos'>
                            {/* <UserPhotos/> */}
                            <p>Coming Soon! Your Photos!</p>
                        </Route>
                        <Route path='/users/update'>
                            <UserUpdateForm user={this.props.user} updateUser={this.props.updateUser}/>
                            <p>So... You Wanna Change Your Info, huh?</p>
                        </Route>
                    </Switch>
                </Router>
                <User user={this.props.user} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const user = state.users.user
    return { 
        user: user,
        userSpecies: user.user_species,
        userGenus: user.user_genus
    }
}

export default connect(mapStateToProps)(UsersContainer)