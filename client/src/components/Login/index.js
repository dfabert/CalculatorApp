import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import isAuthenticated from '../../lib/isAuthenticated';
import './index.scss';

function Login(props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());

  const submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log(username, password);
    // Send request to the server
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    }).then( (res) => {
      return res.json();
    }).then(data => {
      console.log(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user);
      window.location.href = '/';
      setLoggedIn(true);
    }).catch( (err) => {
      console.error(err);
    });
  };

  const updateUsername = (e) => setUsername(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);

  if ( loggedIn ) {
    return (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    );
  } else {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={submit}>
          <div>
            <label>Username: </label>
            <input type="text" name="username" pattern=".{2,16}" required onChange={updateUsername} />
          </div>
          <div>
            <label>Password: </label>
            <input type="password" name="password" required onChange={updatePassword} />
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
      </div>
    );
  };
};

export default withRouter(Login);