import axios from 'axios';
import React, {component} from 'react';

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
        <form onSubmit={this.handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" onchange={this.updateUsername} />
            </label>
            <label>
                Password:
                <input type="password" name="password" onchange={this.updatePassword} />
            </label>
            <input type="submit" value="Submit" />
        </form>);
    };
};