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
    <Navbar.Brand as={Link} to="/">OmniCalculator</Navbar.Brand>
    <Nav className="justify-content-center">
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/Basic">Basic</Nav.Link>
      <NavDropdown title="Financial" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1" as={Link} to="/Financial/Savings">Savings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.1" as={Link} to="/Financial/Savings">Savings</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar>
</>
  );
}

export default NavTabs;
