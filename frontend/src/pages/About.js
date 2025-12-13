// src/pages/About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-page" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-4 mb-3">Redefining Modern Travel</h1>
          <p className="lead text-muted max-w-600 mx-auto">
            Urban Retreat is more than just a booking platform. We are a community of explorers, 
            hosts, and travelers dedicated to finding the perfect space for every story.
          </p>
        </div>

        {/* MISSION SECTION */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="mb-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ background: 'var(--card-bg)' }}>
              <h2 className="fw-bold mb-3">Our Mission</h2>
              <p className="opacity-75">
                Founded in 2025, Urban Retreat started with a simple idea: traveling should feel like coming home. 
                Whether you are a digital nomad needing a workspace, a couple seeking a romantic getaway, or a 
                family on vacation, we curate spaces that inspire.
              </p>
              <p className="opacity-75">
                We believe in transparency, security, and the human connection that comes with sharing spaces.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img 
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80" 
              alt="Interior" 
              className="img-fluid rounded-4 shadow"
            />
          </Col>
        </Row>

        {/* STATS SECTION */}
        <Row className="text-center mb-5 g-4">
          <Col md={4}>
            <Card className="feature-card border-0 shadow-sm p-4 h-100">
              <h1 className="fw-bold text-primary">10k+</h1>
              <p className="text-muted">Active Listings</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card border-0 shadow-sm p-4 h-100">
              <h1 className="fw-bold text-primary">50+</h1>
              <p className="text-muted">Cities Worldwide</p>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card border-0 shadow-sm p-4 h-100">
              <h1 className="fw-bold text-primary">100k+</h1>
              <p className="text-muted">Happy Guests</p>
            </Card>
          </Col>
        </Row>

        {/* CTA */}
        <div className="text-center mt-5">
          <h3>Ready to start your journey?</h3>
          <div className="d-flex justify-content-center gap-3 mt-3">
            <Button as={Link} to="/listings" variant="primary" className="rounded-pill px-4 shadow">
              Explore Listings
            </Button>
            <Button as={Link} to="/contact" variant="outline-primary" className="rounded-pill px-4">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;