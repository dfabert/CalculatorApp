import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Logout extends Component {
  constructor({ changeID, props }) {
    super({ changeID, props });

    // Logout process: Remove token from localStorage
    localStorage.removeItem('token');
    changeID('default');
  };
  render() {
    return (
      <Redirect to="/login" />
    );
  };
}