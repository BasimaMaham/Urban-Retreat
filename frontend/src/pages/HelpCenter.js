// src/pages/HelpCenter.js
import React from 'react';
import { Container, Accordion, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  return (
    <div className="help-page" style={{ paddingTop: '100px', minHeight: '80vh' }}>
      <Container className="pb-5"> {/* Added pb-5 for footer gap */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">How can we help?</h1>
          <p className="text-muted">Find answers to common questions about booking and payments.</p>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            {/* Added 'feature-card' class so it adapts to dark mode automatically */}
            <Card className="feature-card border-0 shadow-sm p-4 mb-5">
              <h4 className="mb-4 fw-bold">Frequently Asked Questions</h4>
              
              {/* Added flush to remove default borders that look bad in dark mode */}
              <Accordion defaultActiveKey="0" flush>
                
                <Accordion.Item eventKey="0" style={{ background: 'transparent' }}>
                  <Accordion.Header>How do I cancel a booking?</Accordion.Header>
                  <Accordion.Body>
                    You can cancel your booking by going to your profile page or contacting our support team. 
                    Cancellations made 48 hours before the trip are fully refundable.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1" style={{ background: 'transparent' }}>
                  <Accordion.Header>Is my payment information secure?</Accordion.Header>
                  <Accordion.Body>
                    Yes! We use 256-bit SSL encryption for all transactions. We do not store your credit card 
                    details on our servers.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2" style={{ background: 'transparent' }}>
                  <Accordion.Header>Can I contact the host directly?</Accordion.Header>
                  <Accordion.Body>
                    Once your booking is confirmed, you will receive the host's contact details via email.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" style={{ background: 'transparent' }}>
                  <Accordion.Header>What if the place isn't as described?</Accordion.Header>
                  <Accordion.Body>
                    We have a "Guest Guarantee." If the property differs significantly from the listing, 
                    contact us within 24 hours.
                  </Accordion.Body>
                </Accordion.Item>

              </Accordion>
            </Card>

            <div className="text-center mt-4 mb-5"> {/* Extra margin bottom */}
              <p className="opacity-75">Still need help?</p>
              <Button 
                as={Link} 
                to="/contact" 
                variant="primary" 
                className="rounded-pill px-4 shadow"
              >
                Contact Support
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HelpCenter;