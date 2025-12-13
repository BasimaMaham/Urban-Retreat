// src/pages/Login.js
import React from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'; // 1. Import useNavigate

const Login = () => {
  const navigate = useNavigate(); // 2. Initialize the hook

  // 3. Create a function to handle the submit action
  const handleLogin = (e) => {
    e.preventDefault(); // Stops the page from refreshing
    // In a real app, you'd check password here. For now, just redirect.
    navigate('/listings'); 
  };

  return (
    <div className="auth-page d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Container style={{ maxWidth: '400px' }}>
        <Card className="feature-card p-4 border-0 shadow">
          <Card.Body>
            <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
            <p className="text-center text-muted mb-4">Login to continue your journey</p>
            
            {/* 4. Add onSubmit to the Form tag */}
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold small">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className="custom-input" />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Label className="fw-bold small">Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className="custom-input" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 rounded-pill mb-3 shadow-sm">
                Login
              </Button>
            </Form>

            <div className="text-center small">
              Don't have an account? <Link to="/signup" className="fw-bold text-primary text-decoration-none">Sign Up</Link>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Login;