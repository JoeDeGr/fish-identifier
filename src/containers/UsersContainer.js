import React, { Component } from 'react';
import User from '../components/User/User';
import UserGenus from '../components/User/UserGenus';
import UserSpecies from '../components/User/UserSpecies';
import UserNav from '../nav/UserNav';
import { connect } from 'react-redux';
import { history } from '../helpers/history';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class UsersContainer extends Component {

    // constructor(props){
    //     super(props);
    //     this.state ={
    //         user: JSON.parse(localStorage.getItem('user'))
    //     }
    // }

    handleOnClick = () => {
        this.props.logout()
    } 
    render() {
        return(
            <div>
                <button onClick={(e) => { this.handleOnClick(e) }}>Log The f*$% Out!</button>
                <h1>You are here. We are now.</h1>
                <Router history = { history }>
                    <UserNav />
                    <Switch>
                        <Route path='/users/genus'>
                            <UserGenus userGenus={this.props.userGenus}/>
                        </Route>
                        <Route path ='/users_species'>
                            <UserSpecies userSpecies={this.props.user_species}/>
                        </Route>
                        <Route path='users/myphotos'>
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

const mapStateToProps = state => {
    const user = state.users.user
    return { 
    user: user,
    userGenus: user.user_genus,
    userSpecies: user.user_species
 }}

export default connect(mapStateToProps)(UsersContainer)