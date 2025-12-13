// src/pages/Listings.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Form, InputGroup, Button, Spinner } from 'react-bootstrap';

const Listings = () => {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // --- DATA BANKS (12 Unique Entries) ---
  const LOCATIONS = [
    "New York, NY", "Miami, FL", "Aspen, CO", "Los Angeles, CA", 
    "Chicago, IL", "Boston, MA", "Seattle, WA", "Phoenix, AZ", 
    "Austin, TX", "Nashville, TN", "New Orleans, LA", "Portland, OR"
  ];

  const TITLES = [
    "Modern Downtown Loft", "Cozy Beachfront Cottage", "Mountain View Cabin", "Luxury Villa with Pool",
    "Minimalist City Studio", "Historic Brick Townhouse", "Lakeside Glass House", "Desert Oasis Retreat",
    "Skyline Penthouse Suite", "Garden Bungalow", "French Quarter Mansion", "Eco-Forest Treehouse"
  ];

  const PRICES = [150, 250, 300, 450, 120, 210, 280, 175, 320, 140, 225, 190];
  
  const RATINGS = [4.8, 4.9, 4.7, 5.0, 4.5, 4.8, 4.9, 4.6, 4.9, 4.7, 4.8, 4.9];

  const DESCRIPTIONS = [
    "Experience the energy of the city in this stunning loft with sunset views.",
    "Wake up to the sound of waves in this private tropical getaway.",
    "Disconnect and relax in the heart of nature with panoramic mountain views.",
    "Enjoy ultimate privacy with an infinity pool and breathtaking hills views.",
    "Perfect for solo travelers or couples looking for a stylish, central stay.",
    "Stay in a piece of history with modern amenities and cobblestone charm.",
    "Floor-to-ceiling windows offer serene lake views in this modern architectural gem.",
    "A peaceful escape featuring cactus gardens and stunning desert sunsets.",
    "Luxury living at its finest with a rooftop terrace and skyline vistas.",
    "A charming, quiet retreat with a private garden near Music Row.",
    "Step outside to jazz music and culture from this elegant historic suite.",
    "Sleep among the trees in this sustainable luxury treehouse experience."
  ];

  // --- FETCH DATA ---
  useEffect(() => {
    // Make sure your backend is running on port 5001
    fetch('http://localhost:5001/api/houses')
      .then(response => response.json())
      .then(data => {
        // Smart Mapping: Assign unique data to each photo
        const formattedListings = data.map((item, index) => ({
          id: item.id,
          // We use the index to pick the specific unique data from our arrays
          // The % ensures that if we somehow get more than 12 photos, it loops back safely
          title: TITLES[index % TITLES.length],
          location: LOCATIONS[index % LOCATIONS.length],
          price: PRICES[index % PRICES.length],
          rating: RATINGS[index % RATINGS.length],
          image: item.urls.regular,
          desc: DESCRIPTIONS[index % DESCRIPTIONS.length]
        }));
        
        setListings(formattedListings);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching listings:", error);
        setLoading(false);
      });
  }, []);

  // --- SEARCH FILTER ---
  const filteredListings = listings.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="listings-page" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Container>
        {/* HEADER */}
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3">Explore Stays</h1>
          <p className="text-muted mb-4">Find the perfect place for your next trip</p>
          
          <div className="d-flex justify-content-center">
            <InputGroup className="mb-3" style={{ maxWidth: '500px' }}>
              <Form.Control
                placeholder="Search by city or name..."
                className="custom-input"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="primary">Search</Button>
            </InputGroup>
          </div>
        </div>

        {/* LOADING SPINNER */}
        {loading ? (
          <div className="text-center py-5">
            <Spinner animation="border" variant="primary" />
            <p className="mt-3 text-muted">Finding the best spots for you...</p>
          </div>
        ) : (
          /* GRID */
          <Row>
            {filteredListings.length > 0 ? (
              filteredListings.map((item) => (
                <Col key={item.id} md={4} className="mb-4">
                  <Card className="listing-card h-100 shadow-sm border-0">
                    <div className="img-wrapper">
                      <Card.Img 
                        variant="top" 
                        src={item.image} 
                        style={{ height: '250px', objectFit: 'cover' }} 
                      />
                    </div>
                    <Card.Body className="d-flex flex-column">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-light text-dark border">{item.location}</span>
                        <span className="text-warning">★ {item.rating}</span>
                      </div>
                      <Card.Title className="fw-bold text-truncate">{item.title}</Card.Title>
                      <Card.Text className="text-muted small flex-grow-1">
                        {item.desc}
                      </Card.Text>
                      <hr className="opacity-25 my-3" />
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <span className="fw-bold fs-5 text-primary">${item.price}</span>
                          <span className="text-muted small"> / night</span>
                        </div>
                        {/* THE MAGIC BUTTON: Passes the data to the Details page */}
                        <Button 
                          variant="outline-primary" 
                          size="sm" 
                          className="rounded-pill" 
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
            ) : (
              <div className="text-center py-5">
                <h3>No results found 😔</h3>
                <p>Try searching for "New York" or "Cabin"</p>
              </div>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Listings;