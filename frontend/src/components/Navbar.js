// src/components/Navbar.js
import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo'; // <--- IMPORT THIS

const CustomNavbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <Navbar 
      expand="lg" 
      className="custom-navbar shadow-sm sticky-top" 
      variant={darkMode ? 'dark' : 'light'}
    >
      <Container>
        {/* REPLACED BRAND WITH LOGO COMPONENT */}
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/listings">Listings</Nav.Link>
            
            <Button 
              variant={darkMode ? "outline-light" : "outline-dark"} 
              onClick={toggleDarkMode}
              className="ms-2 rounded-pill sm-btn"
              size="sm"
            >
              {darkMode ? '☀️' : '🌙'}
            </Button>

            <Button variant="primary" className="ms-2 rounded-pill" as={Link} to="/login">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;