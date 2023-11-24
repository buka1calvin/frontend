import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import "./index.css";

const CardsGroup = () => {
  return (
      <Container fluid className="mt-4 bg-light py-5 ">
        <Row className="justify-content-md-center animate__animated animate__fadeIn">
          <Col md={5} className="mb-4">
            <Card className="card-1">
              <Card.Body>
                <Card.Title>Event Consultancy</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className="animate-button bg-transparent border-light">Button <ArrowRightCircle/></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="card-2">
              <Card.Body>
                <Card.Title>Event Production</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className="animate-button bg-transparent border-light">Button <ArrowRightCircle/></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="card-3">
              <Card.Body>
                <Card.Title>Rental Services</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className="animate-button bg-transparent border-light">Button <ArrowRightCircle className="animate__animated animate__fadeIn"/></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="card-4">
              <Card.Body>
                <Card.Title>Destination Management System</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button className="animate-button bg-transparent border-light">Button <ArrowRightCircle/></Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default CardsGroup;
