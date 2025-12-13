// src/pages/Signup.js
import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const Signup = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  // 3. Create the submit handler
  const handleSignup = (e) => {
    e.preventDefault(); // Stop refresh
    navigate('/listings'); // Redirect to listings
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Container style={{ maxWidth: '450px' }}>
        <Card className="feature-card p-4 border-0 shadow">
          <Card.Body>
            <h2 className="text-center fw-bold mb-4">Create Account</h2>
            <p className="text-center text-muted mb-4">Join Urban Retreat today</p>
            
            {/* 4. Attach the handler here */}
            <Form onSubmit={handleSignup}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="fw-bold small">Full Name</Form.Label>
                <Form.Control type="text" placeholder="John Doe" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold small">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className="fw-bold small">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className="custom-input" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 rounded-pill mb-3 shadow-sm">
                Sign Up
              </Button>
            </Form>

            <div className="text-center small">
              Already have an account? <Link to="/login" className="fw-bold text-primary text-decoration-none">Login</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Signup;