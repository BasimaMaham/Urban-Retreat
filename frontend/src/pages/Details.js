// src/pages/Details.js
import React from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // 1. RECEIVE DATA: We catch the house data sent from Home or Listings
  const house = location.state?.house;

  // 2. SAFETY: If someone refreshes this page directly, send them back (because we don't have the data)
  if (!house) {
    return (
      <Container className="text-center mt-5" style={{ paddingTop: '100px' }}>
        <h2>Listing not found 😔</h2>
        <p>Please go back and select a house.</p>
        <Button variant="primary" onClick={() => navigate('/listings')}>Go to Listings</Button>
      </Container>
    );
  }

  return (
    <div className="details-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Container>
        {/* Back Button */}
        <Button variant="link" onClick={() => navigate(-1)} className="text-decoration-none mb-4 d-inline-block p-0">
          &larr; Back
        </Button>

        <Row>
          {/* LEFT SIDE: Image */}
          <Col md={6} className="mb-4">
            <div className="rounded-4 overflow-hidden shadow-lg position-relative">
              <img 
                src={house.image} 
                alt={house.title} 
                className="img-fluid w-100" 
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-3 fs-5">
                ★ {house.rating}
              </Badge>
            </div>
          </Col>

          {/* RIGHT SIDE: Info & Booking */}
          <Col md={6}>
            <div className="feature-card p-4 h-100 border-0">
              <h1 className="fw-bold mb-2">{house.title}</h1>
              <p className="text-primary fs-5 mb-4">📍 {house.city || house.location}</p>
              
              <h3 className="fw-bold text-success mb-3">
                {/* Handle price display whether it's a string "$120" or number 120 */}
                {typeof house.price === 'number' ? `$${house.price}` : house.price} 
                <span className="text-muted fs-6 text-dark fw-normal">/ night</span>
              </h3>

              <p className="lead opacity-75 mb-4">{house.desc}</p>

              <hr className="opacity-25 mb-4" />

              <div className="d-grid gap-3">
                {/* PASS DATA TO BOOKING PAGE */}
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="rounded-pill shadow" 
                  as={Link} 
                  to={`/booking/${house.id}`} 
                  state={{ house: house }} // <--- CRITICAL: Passing data forward
                >
                  Book This Place
                </Button>
                <Button variant="outline-primary" className="rounded-pill">
                  Contact Host
                </Button>
              </div>

              {/* Amenities Placeholder */}
              <div className="mt-4">
                <h5 className="fw-bold mb-3">Amenities</h5>
                <div className="d-flex gap-3 flex-wrap">
                  <Badge bg="light" text="dark" className="border p-2">📶 WiFi</Badge>
                  <Badge bg="light" text="dark" className="border p-2">❄️ AC</Badge>
                  <Badge bg="light" text="dark" className="border p-2">🍳 Kitchen</Badge>
                  <Badge bg="light" text="dark" className="border p-2">🚗 Parking</Badge>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Details;