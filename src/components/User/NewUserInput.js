import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { userService } from '../services/userServices';

class NewUserInput extends Component {
    constructor () {
        super();
        this.state = {
            name: '',
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        };
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        debugger
        event.preventDefault()
        console.log(this.state)
        let user = this.state
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user})
        };
        debugger
    
        fetch('http://localhost:3000/users', options)
            .then(response => response.json())
            .then(user => {
                debugger
                this.props.createUser(user)
                this.props.setToken(user.token)
                console.log(user)
            } )
    }


    render() {
        return(
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <label>Username</label>
                    <input
                        name = "username"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.username }
                    />
                    <label>Name</label>
                    <input
                        name = "name"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.name }
                    />
                    <label>Email</label>
                    <input
                        name = "email"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.email}
                    />
                    <label>Password</label>
                    <input
                        name = "password"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.password}
                    />
                    <label>Confirm Password Please</label>
                    <input
                        name = "passwordConfirmation"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.passwordConfirmation}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default connect()(NewUserInput)