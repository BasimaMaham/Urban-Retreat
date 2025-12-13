// src/pages/ContactSupport.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ContactSupport = () => {
  const team = [
    {
      name: "Basima Maham",
      role: "Head of Guest Experience",
      email: "basimamaham@gmail.com",
      linkedin: "https://www.linkedin.com/in/basima-maham",
      image: "https://ui-avatars.com/api/?name=Basima+Maham&background=6c5ce7&color=fff&size=150" // Generates initial avatar
    },
    {
      name: "Soban Khan",
      role: "Property Operations Manager",
      email: "thunderstorm20115@gmail.com",
      linkedin: "https://www.linkedin.com/in/soban-khan-670707387/",
      image: "https://ui-avatars.com/api/?name=Soban+Khan&background=0984e3&color=fff&size=150"
    }
  ];

  return (
    <div className="contact-page" style={{ paddingTop: '100px', paddingBottom: '80px', minHeight: '80vh' }}>
      <Container>
        <div className="text-center mb-5">
          <h1 className="fw-bold">Contact Our Team</h1>
          <p className="text-muted">We are here to help you with any issues.</p>
        </div>

        <Row className="justify-content-center">
          {team.map((member, index) => (
            <Col key={index} md={5} className="mb-4">
              <Card className="feature-card border-0 shadow-sm text-center p-4 h-100">
                <Card.Body>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-circle mb-3 shadow-sm"
                    style={{ width: '100px', height: '100px' }}
                  />
                  <h3 className="fw-bold">{member.name}</h3>
                  <p className="text-primary fw-bold mb-3">{member.role}</p>
                  
                  <div className="d-grid gap-2">
                    <Button 
                      variant="outline-primary" 
                      className="rounded-pill"
                      onClick={() => window.location.href = `mailto:${member.email}`}
                    >
                      📧 Email Me
                    </Button>
                    <Button 
                      variant="primary" 
                      className="rounded-pill"
                      onClick={() => window.open(member.linkedin, '_blank')}
                    >
                      🔗 LinkedIn Profile
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ContactSupport;