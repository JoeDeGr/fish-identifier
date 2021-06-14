import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserUpdateForm extends Component {

    constructor (props) {
        super(props);
        this.state = {
            name: this.props.user.name,
            username: this.props.user.username,
            email: this.props.user.email,
            password: '',
        };
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.updateUser(this.state)
    }

    render() {
        debugger
        return(
            <div className="login-newUser">
                <h1> Welcome! </h1>
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
                    
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}

export default connect()(UserUpdateForm)