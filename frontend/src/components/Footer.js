// src/components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer-section pt-5 pb-3">
      <Container>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Urban Retreat</h5>
            <p className="small opacity-75">
              The leading platform for finding unique urban stays and luxury getaways. 
              We make travel simple, secure, and unforgettable.
            </p>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="fw-bold mb-3">Company</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-muted">About Us</Link></li>
              <li className="mb-2"><a href="/" className="text-decoration-none text-muted">Careers</a></li>
              <li className="mb-2"><a href="/" className="text-decoration-none text-muted">Press</a></li>
            </ul>
          </Col>
          <Col md={2} xs={6} className="mb-4">
            <h6 className="fw-bold mb-3">Support</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><Link to="/help" className="text-decoration-none text-muted">Help Center</Link></li>
              <li className="mb-2"><a href="/" className="text-decoration-none text-muted">Safety</a></li>
              <li className="mb-2"><a href="/" className="text-decoration-none text-muted">Cancellation</a></li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h6 className="fw-bold mb-3">Newsletter</h6>
            <p className="small opacity-75">Subscribe to get special offers and updates.</p>
            <div className="d-flex gap-2">
              <input type="email" className="form-control form-control-sm" placeholder="Enter email" />
              <button className="btn btn-primary btn-sm">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="opacity-25" />
        <div className="text-center small opacity-50 mt-3">
          &copy; {new Date().getFullYear()} Urban Retreat Inc. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;