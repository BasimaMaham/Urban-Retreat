// src/pages/Details.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import listingsData from '../data/listingsData'; // We reuse the same data

const Details = () => {
  const { id } = useParams(); // Get the ID from the URL
  const listing = listingsData.find((item) => item.id === parseInt(id));

  if (!listing) {
    return <h2 className="text-center mt-5">Listing not found 😔</h2>;
  }

  return (
    <div className="details-page" style={{ paddingTop: '100px', paddingBottom: '50px' }}>
      <Container>
        {/* Back Button */}
        <Link to="/listings" className="text-decoration-none mb-4 d-inline-block">
          &larr; Back to Listings
        </Link>

        <Row>
          {/* LEFT SIDE: Image */}
          <Col md={6} className="mb-4">
            <div className="rounded-4 overflow-hidden shadow-lg position-relative">
              <img 
                src={listing.image} 
                alt={listing.title} 
                className="img-fluid w-100" 
                style={{ objectFit: 'cover', height: '400px' }}
              />
              <Badge bg="warning" text="dark" className="position-absolute top-0 end-0 m-3 fs-5">
                ★ {listing.rating}
              </Badge>
            </div>
          </Col>

          {/* RIGHT SIDE: Info & Booking */}
          <Col md={6}>
            <div className="feature-card p-4 h-100 border-0">
              <h1 className="fw-bold mb-2">{listing.title}</h1>
              <p className="text-primary fs-5 mb-4">📍 {listing.location}</p>
              
              <h3 className="fw-bold text-success mb-3">
                ${listing.price} <span className="text-muted fs-6 text-dark fw-normal">/ night</span>
              </h3>

              <p className="lead opacity-75 mb-4">{listing.desc}</p>

              <hr className="opacity-25 mb-4" />

              <div className="d-grid gap-3">
                <Button variant="primary" size="lg" className="rounded-pill shadow" as={Link} to={`/booking/${listing.id}`} >
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