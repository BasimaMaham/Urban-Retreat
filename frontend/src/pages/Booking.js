// src/pages/Booking.js
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Booking = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 1. RECEIVE DATA from Details Page
  const listing = location.state?.house;

  // 2. STATE FOR DATES & FORM DATA
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [nights, setNights] = useState(0);
  const [isPaid, setIsPaid] = useState(false);

  // New State: Track form inputs to validate them
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  // New State: To show error messages
  const [showErrors, setShowErrors] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // 3. CALCULATE NIGHTS AUTOMATICALLY
  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      setNights(diffDays > 0 ? diffDays : 0);
    }
  }, [checkIn, checkOut]);

  // If no data, return error
  if (!listing) return <div className="text-center mt-5 pt-5"><h2>Error: No booking selected.</h2><Button onClick={() => navigate('/')}>Go Home</Button></div>;

  // 4. CLEAN PRICE HELPER
  const getRawPrice = (price) => {
    if (typeof price === 'number') return price;
    return parseInt(price.toString().replace(/[^0-9]/g, '')) || 0;
  };

  const pricePerNight = getRawPrice(listing.price);
  const total = pricePerNight * nights;
  const serviceFee = nights > 0 ? 40 : 0;
  const grandTotal = total + serviceFee;

  // --- NEW HANDLERS ---
  
  // Update state when user types
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate before paying
  const handlePayment = () => {
    // 1. Check if dates are selected
    if (nights === 0) {
      setErrorMessage("Please select valid check-in and check-out dates.");
      return;
    }

    // 2. Check if all text fields are filled
    const allFilled = Object.values(formData).every(val => val.trim() !== "");

    if (!allFilled) {
      setShowErrors(true); // This triggers the red borders
      setErrorMessage("Please fill these mandatory details to make payment.");
    } else {
      setShowErrors(false);
      setErrorMessage("");
      setIsPaid(true); // Success!
    }
  };

  return (
    <div className="booking-page" style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <Container>
        <Button variant="link" onClick={() => navigate(-1)} className="text-decoration-none mb-4 d-inline-block p-0">
          &larr; Back to Details
        </Button>

        <h2 className="fw-bold mb-4">Confirm your stay</h2>

        <Row>
          {/* LEFT: Booking Form */}
          <Col md={7} className="mb-4">
            <div className="feature-card p-4 border-0">
              
              <h4 className="mb-3">Your Trip</h4>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Label className="fw-bold small">Check-In</Form.Label>
                  <Form.Control 
                    type="date" 
                    className="custom-input"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    isInvalid={showErrors && !checkIn}
                  />
                </Col>
                <Col md={6}>
                  <Form.Label className="fw-bold small">Check-Out</Form.Label>
                  <Form.Control 
                    type="date" 
                    className="custom-input"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    isInvalid={showErrors && !checkOut}
                  />
                </Col>
              </Row>
              <hr className="opacity-25 mb-4" />

              <h4 className="mb-4">Your Details</h4>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Soban" 
                      className="custom-input" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      isInvalid={showErrors && !formData.firstName}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Khan" 
                      className="custom-input" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      isInvalid={showErrors && !formData.lastName}
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email" 
                    placeholder="Soban@gmail.com" 
                    className="custom-input" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={showErrors && !formData.email}
                  />
                </Form.Group>

                <h4 className="mt-4 mb-3">Payment Info</h4>
                <div className="alert alert-info small">
                  🔒 This is a secure 256-bit SSL encrypted payment.
                </div>
                <Form.Group className="mb-3">
                  <Form.Label>Card Number</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="0000 0000 0000 0000" 
                    className="custom-input" 
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    isInvalid={showErrors && !formData.cardNumber}
                  />
                </Form.Group>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Label>Expiry</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="MM/YY" 
                      className="custom-input" 
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleInputChange}
                      isInvalid={showErrors && !formData.expiry}
                    />
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="123" 
                      className="custom-input" 
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      isInvalid={showErrors && !formData.cvc}
                    />
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
                    <small className="text-muted">{listing.location || listing.city}</small>
                    <div className="small mt-1">★ {listing.rating} (Reviewers)</div>
                  </div>
                </div>

                <hr className="opacity-25" />

                <h5 className="fw-bold mb-3">Price Details</h5>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>${pricePerNight} x {nights} nights</span>
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

                {/* ERROR MESSAGE DISPLAY */}
                {errorMessage && (
                  <div className="alert alert-danger py-2 small text-center mb-3">
                    {errorMessage}
                  </div>
                )}

                {!isPaid ? (
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-100 rounded-pill shadow-sm"
                    onClick={handlePayment} 
                    // I removed the 'disabled' prop so the user can CLICK and see the error message
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