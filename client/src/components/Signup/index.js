import React, {component} from 'react';
import './index.scss';
const router = require('react-router')

export default class SignupForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    };

    handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`signup form, username: ${this.state.username}`);
    
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((response) => {
            console.log(response);
            window.location.href = '/';
        }).catch(error => {
            console.log(`Signup server error: ${error}`);
            window.location.href = '/signup';
        });
    };

    updateUsername = (e) => this.setState({  username: e.target.value  });

    updatePassword = (e) => this.setState({  password: e.target.value  });

    render() {
        return (
            <div className='container'>
                <form id='signup' onSubmit={this.handleSubmit}>
                    <h1>Sign Up for OmniCalculator</h1>
                    <input type="text" name="username" placeholder="OmniUsername" onChange={this.updateUsername} />
                    <input type="password" name="password" placeholder="Password" onChange={this.updatePassword} />
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>);
    };
};