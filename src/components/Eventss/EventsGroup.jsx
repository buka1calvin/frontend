import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import event1 from "../../assets/assetss/event1.jpg";
import "animate.css";
import EventsWelcome from "../Eventss/EventsWelcome";

const EventsGroup = () => {
  return (
    <div fluid className="bg-light py-4 ">
        <EventsWelcome/>
        <Container fluid>
      <Row className="animate__animated animate__fadeIn custom-cards">
        <Col md={4} className="mb-4">
          <Card >
            <Card.Img variant="top" src={event1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                at deserunt impedit dolor voluptate iste expedita sapiente culpa
                molestiae totam qui veniam. Doloremque illum doloribus saepe cum
                explicabo illo unde?
              </Card.Text>
              <Button variant="primary">Go somewhere <ArrowRightCircle/></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={event1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                at deserunt impedit dolor voluptate iste expedita sapiente culpa
                molestiae totam qui veniam. Doloremque illum doloribus saepe cum
                explicabo illo unde?
              </Card.Text>
              <Button variant="primary">Go somewhere <ArrowRightCircle/></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={event1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                at deserunt impedit dolor voluptate iste expedita sapiente culpa
                molestiae totam qui veniam. Doloremque illum doloribus saepe cum
                explicabo illo unde?
              </Card.Text>
              <Button variant="primary">Go somewhere <ArrowRightCircle/></Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src={event1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                at deserunt impedit dolor voluptate iste expedita sapiente culpa
                molestiae totam qui veniam. Doloremque illum doloribus saepe cum
                explicabo illo unde?
              </Card.Text>
              <Button variant="primary">Go somewhere <ArrowRightCircle/></Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </div>
  );
};

export default EventsGroup;
