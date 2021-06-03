import React, { Component } from 'react';
import { connect } from 'react-redux'

class UserLogin extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            email: '',
            password: ''
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
        const user = this.state
        this.props.login(user)
        // const options = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({user})
        // };

        // this.props.get(options, '/login')

    }

    render(){
        return(
            <div>
                <form onSubmit = { this.handleOnSubmit }>
                    <label>Username</label>
                    <input
                        name = "username"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.name }
                    />
                    <label>Email</label>
                    <input
                        name = "email"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.name }
                    />
                    <label>Password</label>
                    <input
                        name = "password"
                        type = "text"
                        onChange = {(e) => this.handleOnChange(e) }
                        value = { this.state.name }
                    />
                    <input type = "submit" />
                </form>
            </div>
        )
    }
}

export default connect()(UserLogin)