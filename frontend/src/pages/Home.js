// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';

const Home = () => {
  const [listings, setListings] = useState([]);

  // DATA BANKS for unique details
  const CITIES = ["New York, NY", "Los Angeles, CA", "Miami, FL", "Chicago, IL", "Austin, TX", "Seattle, WA"];
  const TITLES = ["Modern Downtown Loft", "Luxury Beach Villa", "Cozy Mountain Cabin", "Historic Townhouse", "Minimalist Studio", "Grand Estate"];
  const PRICES = ["$120", "$350", "$180", "$210", "$95", "$500"];
  const RATINGS = [4.8, 4.9, 4.7, 5.0, 4.5, 4.9];

  useEffect(() => {
    fetch('http://localhost:5001/api/houses')
      .then(response => response.json())
      .then(data => {
        const formattedListings = data.map((item, index) => ({
          id: item.id,
          title: TITLES[index % TITLES.length], 
          city: CITIES[index % CITIES.length],
          price: `${PRICES[index % PRICES.length]}/night`,
          rating: RATINGS[index % RATINGS.length],
          image: item.urls.regular,
          desc: item.alt_description || "Experience city life in this stunning home with sunset views."
        }));

        // ✅ FIX 1: We stick to the Rule of 6
        // Even though the backend sends 12, we only save the first 6 for the Home page.
        setListings(formattedListings.slice(0, 6)); 
      })
      .catch(error => console.error("Error fetching listings:", error));
  }, []);

  const reviews = [
    { name: "Sarah J.", text: "The booking process was so easy!", role: "Traveler" },
    { name: "Mike T.", text: "Urban Retreat saved my business trip.", role: "Business" },
    { name: "Jessica L.", text: "Absolutely loved the dark mode design.", role: "Designer" },
    { name: "David K.", text: "Best prices I found online.", role: "Student" },
    { name: "Sarah J.", text: "The booking process was so easy!", role: "Traveler" },
    { name: "Mike T.", text: "Urban Retreat saved my business trip.", role: "Business" },
    { name: "Jessica L.", text: "Absolutely loved the dark mode design.", role: "Designer" },
    { name: "David K.", text: "Best prices I found online.", role: "Student" }
  ];

  return (
    <div className="home-page position-relative">
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="wave-background"></div>

      {/* HERO SECTION */}
      <div className="hero-section text-center">
        <Container>
          <h1 className="hero-title">Find your next <span className="highlight-text">perfect stay</span></h1>
          <p className="hero-subtitle text-muted lead">
            Discover luxury urban apartments, cozy guest houses, and unique homes.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button variant="primary" size="lg" className="rounded-pill px-5 shadow-lg">Explore Places</Button>
            <Button variant="outline-secondary" size="lg" className="rounded-pill px-5">Learn More</Button>
          </div>
        </Container>
      </div>

      {/* FEATURED LISTINGS */}
      <div className="listings-section">
        <Container>
          <div className="d-flex justify-content-between align-items-end mb-4">
            <h2 className="fw-bold">Featured Listings</h2>
            <Button variant="link" as={Link} to="/listings">View All &rarr;</Button>
          </div>
          <Row>
            {listings.length === 0 ? (
              <p className="text-center">Loading luxury homes...</p>
            ) : (
              listings.map((item) => (
                <Col key={item.id} md={4} className="mb-4">
                  <Card className="listing-card h-100 shadow-sm border-0">
                    <div className="img-wrapper position-relative">
                      <span className="position-absolute top-0 start-0 m-3 badge bg-light text-dark shadow-sm">
                        {item.city}
                      </span>
                      <Card.Img 
                        variant="top" 
                        src={item.image} 
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <Card.Title className="fw-bold mb-0 text-truncate">{item.title}</Card.Title>
                        <span className="text-warning small">★ {item.rating}</span>
                      </div>
                      <Card.Text className="text-muted small flex-grow-1">
                        {item.desc.length > 80 ? item.desc.substring(0, 80) + "..." : item.desc}
                      </Card.Text>
                      <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
                        <span className="fw-bold text-primary fs-5">{item.price}</span>
                        {/* ✅ FIX 2: Added the "state" prop so Details page doesn't crash */}
                        <Button 
                          variant="primary" 
                          size="sm" 
                          className="rounded-pill px-4" 
                          as={Link} 
                          to={`/details/${item.id}`}
                          state={{ house: item }}
                        >
                          Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>
      </div>
      
      {/* REVIEWS SECTION */}
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