// src/components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm">
      <Container>
        {/* Brand Logo - Links to Home */}
        <Navbar.Brand as={Link} to="/" className="fw-bold text-primary">
          Urban Retreat
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Links */}
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="#">Listings</Nav.Link>
            
            {/* Login Button */}
            <Button variant="primary" className="ms-2">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;