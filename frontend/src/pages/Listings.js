// src/pages/Listings.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, InputGroup, Button } from 'react-bootstrap';
import listingsData from '../data/listingsData'; // Import the data

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter the data based on search term
  const filteredListings = listingsData.filter((item) => {
    return (
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="listings-page" style={{ paddingTop: '80px', minHeight: '100vh' }}>
      <Container>
        {/* HEADER & SEARCH */}
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

        {/* LISTINGS GRID */}
        <Row>
          {filteredListings.length > 0 ? (
            filteredListings.map((item) => (
              <Col key={item.id} md={4} className="mb-4">
                <Card className="listing-card h-100 shadow-sm border-0">
                  <div className="img-wrapper">
                    <Card.Img variant="top" src={item.image} />
                  </div>
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="badge bg-light text-dark border">{item.location}</span>
                      <span className="text-warning">★ {item.rating}</span>
                    </div>
                    <Card.Title className="fw-bold">{item.title}</Card.Title>
                    <Card.Text className="text-muted small flex-grow-1">
                      {item.desc}
                    </Card.Text>
                    <hr className="opacity-25 my-3" />
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fw-bold fs-5 text-primary">${item.price}</span>
                        <span className="text-muted small"> / night</span>
                      </div>
                      <Button variant="outline-primary" size="sm" className="rounded-pill">
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
      </Container>
    </div>
  );
};

export default Listings;