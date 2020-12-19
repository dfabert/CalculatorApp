import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './NavTabs.scss';

function NavTabs() {

  return (
<>

  <Navbar sticky='top'>
    <Navbar.Brand as={Link} to="/"><i class="fas fa-infinity"></i>OmniCalculator</Navbar.Brand>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">

          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </li>  
        <li className="nav-item active"> 
          <Nav.Link as={Link} to="/Basic">Basic</Nav.Link>
        </li>
        <li className="nav-item active"> 
          <NavDropdown title="Financial" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" as={Link} to="/Financial/Savings">Savings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1" as={Link} to="/Financial/Budget">Budget</NavDropdown.Item>
          </NavDropdown>
        </li>
        <li className="nav-item active"> 
          <Nav.Link as={Link} to="/Currency">Currency</Nav.Link>
        </li>
        <li className="nav-item active"> 
        <Nav.Link as={Link} to="/Graph">Graphs</Nav.Link>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <Nav.Link  id="signUp" as={Link} to="/Signup">Sign Up</Nav.Link>
        </li>
        <li className="nav-item active">
          <NavDropdown title= "My Account" id="accountDropdown">
            <NavDropdown.Item href="#action/3.1" as={Link} to="/Login">Log In</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.1" as={Link} to="/Logout">Log Out</NavDropdown.Item>
          </NavDropdown>
        </li>
      </ul>
   
  </Navbar>
</>
  );
}

export default NavTabs;
