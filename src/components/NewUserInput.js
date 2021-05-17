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
        if (!this.state.username || !this.state.email) return
        if (!(this.state.password === this.state.passwordConfirmation) || (this.state.password == '')) return

        this.props.handleLogin(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.handleOnSubmit}>
                    <input
                        type = "text"
                        onChange = { this.handleOnChange}
                        value = { this.state.username}
                    />
                    <input
                        type = "text"
                        onChange = { this.handleOnChange}
                        value = { this.state.name}
                    />
                    <input
                        type = "text"
                        onChange = { this.handleOnChange}
                        value = { this.state.email}
                    />
                    <input
                        type = "text"
                        onChange = { this.handleOnChange}
                        value = { this.state.password}
                    />
                    <input
                        type = "text"
                        onChange = { this.handleOnChange}
                        value = { this.state.passwordConfirmation}
                    />
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default connect(null, mapDispatchToProps)(NewUserInput)