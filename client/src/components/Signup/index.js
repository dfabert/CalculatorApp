import axios from 'axios';
import React, {component} from 'react';
import './index.scss';

export default class SignupForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleSubmit(e) {
        e.preventDefault();
        
        console.log(`signup form, username: ${this.state.username}`);
    
        axios.post('/', {
            username: this.state.username,
            password: this.state.password
        }).then (response => {
            console.log(response);
            if (response.data) {
                console.log('Successful signup!');
                this.setState({
                    redirectTo: '/login'
                });
            } else {
                console.log('Signup error.');
            }
        }).catch(error => {
            console.log(`Signup server error: ${error}`)
        });
    };

    updateUsername(e) {
        this.state.username = e.target.value; 
    };

    updatePassword(e) {
        this.state.password = e.target.value;
    };

    render() {
        return (
        <body>
            <div class='container'>
            <form id='signup' onSubmit={this.handleSubmit}>
                <h1>Sign Up for OmniCalculator</h1>
                <input type="text" name="username" placeholder="OmniUsername" onchange={this.updateUsername} />
                <input type="password" name="password" placeholder="Password" onchange={this.updatePassword} />
                <br></br>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </body>);
    };
};