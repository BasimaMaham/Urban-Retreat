// src/pages/Booking.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import listingsData from '../data/listingsData';

const Booking = () => {
  const { id } = useParams();
  const listing = listingsData.find((item) => item.id === parseInt(id));
  
  // 1. STATE FOR DATES
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  // 2. CALCULATE NIGHTS AUTOMATICALLY
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      
      // Calculate difference in time
      const diffTime = end - start;
      // Calculate difference in days (1000ms * 60s * 60m * 24h)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 0) {
        setNights(diffDays);
      } else {
        setNights(0); // Prevent negative or zero nights
      }
    }
  }, [checkIn, checkOut]);

  if (!listing) return <h2 className="text-center mt-5">Listing not found</h2>;

  // 3. DYNAMIC CALCULATIONS
  const total = listing.price * nights;
  const serviceFee = nights > 0 ? 40 : 0; // Only charge fee if dates selected
  const grandTotal = total + serviceFee;

  return (
    <div className="booking-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <Container>
        <Link to={`/details/${id}`} className="text-decoration-none mb-4 d-inline-block">
          &larr; Back to Details
        </Link>

        <h2 className="fw-bold mb-4">Confirm your stay</h2>

        <Row>
          {/* LEFT: Booking Form */}
          <Col md={7} className="mb-4">
            <div className="feature-card p-4 border-0">
              
              {/* --- NEW SECTION: DATE SELECTION --- */}
              <h4 className="mb-3">Your Trip</h4>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Label className="fw-bold small">Check-In</Form.Label>
                  <Form.Control 
                    type="date" 
                    className="custom-input"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label className="fw-bold small">Check-Out</Form.Label>
                  <Form.Control 
                    type="date" 
                    className="custom-input"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </Col>
              </Row>
              <hr className="opacity-25 mb-4" />

              <h4 className="mb-4">Your Details</h4>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="John" className="custom-input" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Doe" className="custom-input" />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="john@example.com" className="custom-input" />
                </Form.Group>

                <h4 className="mt-4 mb-3">Payment Info</h4>
                <div className="alert alert-info small">
                  🔒 This is a secure 256-bit SSL encrypted payment.
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control type="text" placeholder="0000 0000 0000 0000" className="custom-input" />
                </Form.Group>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Expiry</Form.Label>
                    <Form.Control type="text" placeholder="MM/YY" className="custom-input" />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control type="text" placeholder="123" className="custom-input" />
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>

          {/* RIGHT: Price Summary */}
          <Col md={5}>
            <Card className="listing-card border-0 shadow-lg sticky-top" style={{ top: '100px' }}>
              <Card.Body className="p-4">
                <div className="d-flex gap-3 mb-3">
                  <img 
                    src={listing.image} 
                    alt="mini-preview" 
                    className="rounded-3" 
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }} 
                  />
                  <div>
                    <h6 className="fw-bold mb-1">{listing.title}</h6>
                    <small className="text-muted">{listing.location}</small>
                    <div className="small mt-1">★ {listing.rating} (Reviewers)</div>
                  </div>
                </div>

                <hr className="opacity-25" />

                <h5 className="fw-bold mb-3">Price Details</h5>
                
                {/* DYNAMIC PRICE DISPLAY */}
                <div className="d-flex justify-content-between mb-2">
                  <span>${listing.price} x {nights} nights</span>
                  <span>${total}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>Service Fee</span>
                  <span>${serviceFee}</span>
                </div>
                
                <hr className="opacity-25" />
                
                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total</span>
                  <span>${grandTotal}</span>
                </div>

                {!isPaid ? (
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100 rounded-pill shadow-sm"
                    onClick={() => setIsPaid(true)}
                    disabled={nights === 0} // Disable if dates aren't picked
                  >
                    {nights > 0 ? `Pay $${grandTotal}` : 'Select Dates'}
                  </Button>
                ) : (
                  <Button variant="success" size="lg" className="w-100 rounded-pill shadow-sm" disabled>
                    ✅ Payment Successful!
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;