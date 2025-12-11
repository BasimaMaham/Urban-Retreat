// src/pages/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="bg-light p-5 mb-4 rounded-3 text-center">
        <Container fluid>
          <h1 className="display-5 fw-bold">Find your next stay</h1>
          <p className="col-md-8 fs-4 mx-auto">
            Search deals on hotels, homes, and much more...
          </p>
          <Button variant="primary" size="lg">Explore Places</Button>
        </Container>
      </div>
      
      <Container>
        <h3>Featured Listings</h3>
        <p>Your listings will go here later...</p>
      </Container>
    </div>
  );
};

export default Home;