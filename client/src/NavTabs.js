import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import './NavTabs.scss';

function NavTabs() {

  return (



<Navbar bg="light" expand='lg'>
    <Navbar.Brand as={Link} to="/"><i class="fas fa-infinity"></i>OmniCalculator</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='container-fluid'>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/Basic">Basic</Nav.Link> 
        <Nav.Link as={Link} to="/Savings">Financial</Nav.Link> 
         <Nav.Link as={Link} to="/Currency">Currency</Nav.Link>
        <Nav.Link as={Link} to="/Random">Random</Nav.Link>
        <div className='ml-auto'>
        <Nav.Link id="signUp" as={Link} to="/Signup">Sign Up</Nav.Link>
        <NavDropdown title= "My Account" id="accountDropdown">
          <NavDropdown.Item href="#action/3.1" as={Link} to="/Login">Log In</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.1" as={Link} to="/Logout">Log Out</NavDropdown.Item>
        </NavDropdown>
        </div>
        </Nav>
      </Navbar.Collapse>
  </Navbar>

  );

  }

export default NavTabs;
