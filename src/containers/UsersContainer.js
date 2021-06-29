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
        const {user, removeGenus, removeSpecies, updateUser } = this.props
        return(
            <div>
                <h1>Welcome {user?.username}</h1>
                <h3>You are here. We are now.</h3>
                <Router history = { history }>
                    <UserNav />
                    <div className='user-myStuff'>
                    <Switch>
                        <Route path='/users/genus'>
                            <UserGenus userGenus={user?.user_genus} removeGenus={removeGenus}/>
                            <p>Hi</p>
                        </Route>
                        <Route path ='/users/species'>
                            <UserSpecies userSpecies={user?.user_species} removeSpecies={removeSpecies}/>
                        </Route>
                        <Route path='/users/myphotos'>
                            {/* <UserPhotos/> */}
                            <p>Coming Soon! Your Photos!</p>
                        </Route>
                        <Route path='/users/update'>
                            <UserUpdateForm user={user} updateUser={updateUser}/>
                            <p>So... You Wanna Change Your Info, huh?</p>
                        </Route>
                    </Switch>
                    </div>
                </Router>
                <div className='user-homePage'>
                    <User user={user} />
                </div>
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return { 
        // user: state.users.user,
        // userSpecies: state.users.user.user_species,
        // userGenus: state.users.user.user_genus
//     }
// }

export default connect()(UsersContainer)