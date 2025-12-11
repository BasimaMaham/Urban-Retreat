// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const listings = [
    {
      id: 1,
      title: "Modern Loft in Downtown",
      price: "$120/night",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      desc: "Experience city life in this stunning loft with sunset views."
    },
    {
      id: 2,
      title: "Cozy Beachfront Cottage",
      price: "$250/night",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
      desc: "Wake up to the sound of waves in this private tropical getaway."
    },
    {
      id: 3,
      title: "Mountain View Cabin",
      price: "$180/night",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",
      desc: "Disconnect and relax in the heart of nature."
    }
  ];

  // We duplicate the reviews so the animation loops smoothly (Infinite Scroll Trick)
  const reviews = [
    { name: "Sarah J.", text: "The booking process was so easy!", role: "Traveler" },
    { name: "Mike T.", text: "Urban Retreat saved my business trip.", role: "Business" },
    { name: "Jessica L.", text: "Absolutely loved the dark mode design.", role: "Designer" },
    { name: "David K.", text: "Best prices I found online.", role: "Student" },
    // Duplicates for loop
    { name: "Sarah J.", text: "The booking process was so easy!", role: "Traveler" },
    { name: "Mike T.", text: "Urban Retreat saved my business trip.", role: "Business" },
    { name: "Jessica L.", text: "Absolutely loved the dark mode design.", role: "Designer" },
    { name: "David K.", text: "Best prices I found online.", role: "Student" }
  ];

  return (
    <div className="home-page position-relative">
      
      {/* 1. LIGHT MODE BACKGROUND (Blobs) */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* 2. DARK MODE BACKGROUND (Waves) */}
      <div className="wave-background"></div>

      {/* HERO SECTION */}
      <div className="hero-section text-center">
        <Container>
          <h1 className="hero-title">Find your next <span className="highlight-text">perfect stay</span></h1>
          <p className="hero-subtitle text-muted lead">
            Discover luxury urban apartments, cozy guest houses, and unique homes.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg" className="rounded-pill px-5 shadow-lg">
              Explore Places
            </Button>
            <Button variant="outline-secondary" size="lg" className="rounded-pill px-5">
              Learn More
            </Button>
          </div>
        </Container>
      </div>

      {/* WHY CHOOSE US */}
      <Container className="my-5 position-relative" style={{ zIndex: 2 }}>
        <Row className="text-center g-4">
          <Col md={4}>
            <div className="feature-card p-4 h-100">
              <div className="display-4 text-primary mb-3">🛡️</div>
              <h4>Secure Booking</h4>
              <p className="small opacity-75">Verified hosts and secure payment options.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card p-4 h-100">
              <div className="display-4 text-primary mb-3">💰</div>
              <h4>Best Prices</h4>
              <p className="small opacity-75">We match you with the best deals available.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="feature-card p-4 h-100">
              <div className="display-4 text-primary mb-3">🎧</div>
              <h4>24/7 Support</h4>
              <p className="small opacity-75">Our team is always here to help you.</p>
            </div>
          </Col>
        </Row>
      </Container>

      {/* FEATURED LISTINGS */}
      <div className="listings-section">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="fw-bold">Featured Listings</h2>
            <Button variant="link">View All &rarr;</Button>
          </div>
          <Row>
            {listings.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="listing-card h-100">
                  <div className="img-wrapper">
                    <Card.Img variant="top" src={item.image} />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">
                      {item.desc}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <span className="fw-bold text-primary fs-5">{item.price}</span>
                      <Button variant="primary" size="sm" className="rounded-pill px-3" as={Link} to={`/details/${item.id}`}>Book</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* REVIEWS SECTION (Vertical Scroll) */}
      <div className="reviews-section">
        <Container>
          <Row className="align-items-center">
            <Col md={5} className="mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Loved by travelers worldwide</h2>
              <p className="text-muted">
                See what our community has to say about their stays. We pride ourselves on transparency and quality service.
              </p>
              <Button variant="outline-primary" className="rounded-pill mt-3">Read all reviews</Button>
            </Col>
            
            <Col md={6} className="offset-md-1">
              {/* The Moving Window */}
              <div className="reviews-wrapper">
                <div className="reviews-overlay-top"></div>
                
                <div className="reviews-track">
                  {reviews.map((review, index) => (
                    <div key={index} className="review-card">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-bold">{review.name}</span>
                        <span className="badge bg-light text-dark border">{review.role}</span>
                      </div>
                      <p className="mb-0 small fst-italic">"{review.text}"</p>
                      <div className="text-warning mt-2">⭐⭐⭐⭐⭐</div>
                    </div>
                  ))}
                </div>

                <div className="reviews-overlay-bottom"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
};

export default Home;