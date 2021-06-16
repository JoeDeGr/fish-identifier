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
                <h1>Welcome {this.props.user?.username}</h1>
                <h3>You are here. We are now.</h3>
                <Router history = { history }>
                    <UserNav />
                    <div className='user-myStuff'>
                    <Switch>
                        <Route path='/users/genus'>
                            <UserGenus userGenus={this.props.userGenus} removeGenus={this.props.removeGenus}/>
                        </Route>
                        <Route path ='/users/species'>
                            <UserSpecies userSpecies={this.props.userSpecies} removeSpecies={this.props.removeSpecies}/>
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
                    </div>
                </Router>
                <div className='user-homePage'>
                    <User user={this.props.user} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const user = state.users.user
    return { 
        user: user,
        userSpecies: user?.user_species,
        userGenus: user?.user_genus
    }
}

export default connect(mapStateToProps)(UsersContainer)