import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../../lib/isAuthenticated';

export default class Login extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedin: isAuthenticated()
    };
  };

  submit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    let form = e.target;
    let formData = new FormData(form);
    let params = JSON.stringify(formData);
    console.log(params);
    
    // Send request to the server
    fetch('/api/user/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
    })
    }).then( (res) => {
      return res.json()
    }).then(data => {
      console.log(data);
      localStorage.setItem('token', data.token)
      this.setState({loggedin: true})
    }).catch( (err) => {
      console.error(err)
    });
  };

  updateUsername = (e) => this.setState({  username: e.target.value  });

  updatePassword = (e) => this.setState({  password: e.target.value  });

  render() {
    if ( this.state.loggedin ) {
      return (
        <Redirect
          to={{
            pathname: '/',
            state: { from: this.props.location }
          }}
        />
      );
    } else {
      return (
        <div>
          <h1>Login</h1>
          <form onSubmit={this.submit.bind(this)}>
            <div>
              <label>Username: </label>
              <input type="text" name="username" pattern=".{2,16}" required onChange={this.updateUsername} />
            </div>
            <div>
              <label>Password: </label>
              <input type="password" name="password" required onChange={this.updatePassword} />
            </div>
            <div>
              <input type="submit" value="Log in" />
            </div>
          </form>
        </div>
      );
    };
  };
};