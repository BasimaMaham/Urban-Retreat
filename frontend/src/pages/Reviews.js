// src/pages/Reviews.js
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';

const Reviews = () => {
  // 1. STATE: Restored the full list of 6 reviews
  const [reviews, setReviews] = useState([
    { id: 1, name: "Sarah J.", role: "Traveler", text: "The booking process was so easy, and the apartment was exactly like the photos!", rating: 5 },
    { id: 2, name: "Mike T.", role: "Business", text: "Urban Retreat saved my business trip. Fast WiFi and great location.", rating: 5 },
    { id: 3, name: "Jessica L.", role: "Designer", text: "Absolutely loved the experience. Very friendly host.", rating: 4 },
    { id: 4, name: "David K.", role: "Student", text: "Best prices I found online. Perfect for my budget.", rating: 5 },
    { id: 5, name: "Emily R.", role: "Family", text: "Great for family vacations. The host was super helpful.", rating: 5 },
    { id: 6, name: "Chris P.", role: "Nomad", text: "I live in Airbnbs, and this platform is my new favorite.", rating: 4 },
  ]);

  // 2. STATE: Form Data
  const [formData, setFormData] = useState({
    name: '',
    role: 'Traveler',
    rating: 5,
    text: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: Date.now(),
      name: formData.name,
      role: formData.role,
      text: formData.text,
      rating: parseInt(formData.rating)
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: '', role: 'Traveler', rating: 5, text: '' });
  };

  return (
    <div className="reviews-page" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '100vh' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Community Reviews</h1>
          <p className="text-muted">See what travelers are saying about their stays.</p>
        </div>

        <Row>
          {/* LEFT: Review List */}
          <Col md={8}>
            <Row>
              {reviews.map((review) => (
                <Col key={review.id} md={6} className="mb-4">
                  <Card className="feature-card border-0 shadow-sm h-100 p-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="fw-bold mb-0">{review.name}</h5>
                        <span className="badge bg-light text-dark border">{review.role}</span>
                      </div>
                      <div className="text-warning mb-2">
                        {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                      </div>
                      <p className="text-muted fst-italic">"{review.text}"</p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* RIGHT: Write a Review Form */}
          <Col md={4}>
            <Card className="feature-card border-0 shadow p-4 sticky-top" style={{ top: '100px' }}>
              <h4 className="fw-bold mb-3">Share your experience</h4>
              <p className="text-muted small mb-4">
                Did you enjoy your stay? Let us know!
              </p>
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Your Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Your Name" 
                    className="custom-input" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Travel Role</Form.Label>
                  <Form.Select 
                    className="custom-input"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="Traveler">Traveler</option>
                    <option value="Business">Business</option>
                    <option value="Family">Family</option>
                    <option value="Student">Student</option>
                    <option value="Nomad">Digital Nomad</option>
                    <option value="Couple">Couple</option>
                    <option value="Backpacker">Backpacker</option>
                    <option value="Other">Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Rating</Form.Label>
                  <Form.Select 
                    className="custom-input"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                  >
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Good</option>
                    <option value="3">3 - Average</option>
                    <option value="2">2 - Poor</option>
                    <option value="1">1 - Terrible</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold small">Review</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Write your review here..." 
                    className="custom-input"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 rounded-pill shadow-sm">
                  Submit Review
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;