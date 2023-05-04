import React from 'react';
import { Container, Row, Col,  Card } from 'react-bootstrap';
import CardDeck from 'react-bootstrap/Card';
import { FaHandHoldingHeart, FaRecycle, FaTruckLoading } from 'react-icons/fa';

const ServiceSection = () => {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">Our Services</h2>
        <CardDeck>
          <Row xs={1} md={3}>
            <Col>
              <Card className="mb-4 h-100">
                <Card.Body>
                  <FaHandHoldingHeart className="text-success mb-3" size={48} />
                  <Card.Title>Donations</Card.Title>
                  <Card.Text>
                    We accept donations of all types of food items and distribute them to those in need.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4 h-100">
                <Card.Body>
                  <FaRecycle className="text-success mb-3" size={48} />
                  <Card.Title>Reduce Waste</Card.Title>
                  <Card.Text>
                    We aim to reduce food waste by redistributing surplus food to those who are food insecure.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mb-4 h-100">
                <Card.Body>
                  <FaTruckLoading className="text-success mb-3" size={48} />
                  <Card.Title>Delivery</Card.Title>
                  <Card.Text>
                    We provide delivery services to ensure that food is delivered directly to those in need.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </CardDeck>
      </Container>
    </section>
  );
};

export default ServiceSection;
