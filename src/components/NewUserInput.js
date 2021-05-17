import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        event.preventDefault()
        console.log(this.state)
        // if (!this.state.username || !this.state.email) return
        // if (!(this.state.password === this.state.passwordConfirmation) || (this.state.password === '')) return

        // this.props.handleLogin(this.state)
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