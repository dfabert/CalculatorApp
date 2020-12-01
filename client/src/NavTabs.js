import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavTabs() {
  var activeKey = '1';
  const handleSelect  = (eventKey) => activeKey = '${eventKey}';

  return (
<>
  <Navbar bg="dark" variant="dark" sticky='top'>
    <Navbar.Brand href="/">OmniCalculator</Navbar.Brand>
    <Nav className="justify-content-center" variant='pills' onSelect={handleSelect}>
      <Nav.Link eventKey='1' href="/">Home</Nav.Link>
      <Nav.Link eventKey='2' href="/Basic">Basic</Nav.Link>
      <NavDropdown title="Financial" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><a href="/Financial/Savings">Savings</a></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
  </Navbar>
</>
  );
}

export default NavTabs;
