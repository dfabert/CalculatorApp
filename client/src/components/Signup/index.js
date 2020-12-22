import React, {  useState } from 'react';
import './index.scss';
import { withRouter } from 'react-router-dom';

function SignupForm({ changeID, history }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();    
        fetch('/api/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(data => {
            console.log(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', data.user);
        }).catch(error => {
            console.log(`Signup server error: ${error}`);
            history.push('/signup');
        });
    };

    const updateUsername = (e) => setUsername(e.target.value);
    const updatePassword = (e) => setPassword(e.target.value);

    
        return (
            <div className='container'>
                <form id='signup' onSubmit={handleSubmit}>
                    <h1>Sign Up for OmniCalculator</h1>
                    <input type="text" name="username" placeholder="OmniUsername" onChange={updateUsername} />
                    <input type="password" name="password" placeholder="Password" onChange={updatePassword} />
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>);
    
};

export default withRouter(SignupForm);