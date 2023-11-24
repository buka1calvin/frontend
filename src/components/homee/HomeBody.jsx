import React from "react";
import { Col, Row, Card, Button, Carousel } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import intern001 from "../../assets/assetss/international-001.jpeg";
import intern002 from "../../assets/assetss/internation-002.jpeg";
import intern003 from "../../assets/assetss/international-003.jpeg";
import event from "../../assets/assetss/godiscover.jpeg";
import "./index.css";
import { AppLayout } from "../../layouts";

const HomeBody = () => {
  const sponsorLogos = Array(12).fill(event);
  return (
    <AppLayout>
      <div className="bg-light py-3 home-container">
        <Carousel className="h-80 bg-dark " fade>
          <Carousel.Item interval={1500} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={intern001} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <Button className="bg-transparent border-light">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1000} className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={intern002} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <Button className="bg-transparent border-light">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <div className="carousel-overlay"></div>
            <img src={intern003} alt="" />
            <Carousel.Caption className="carousel-caption">
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
              <Button className="bg-transparent border-light">
                learn more <ArrowRightCircle />{" "}
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="w-100 px-5 py-3 danger text-light">
          <Row>
            <Col sm={12} md={6}>
              <h1>Who We are</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
                officia minus nostrum architecto aliquam incidunt necessitatibus
                vitae alias mollitia veniam! Rerum, eum? Provident, omnis?
                Ratione exercitationem blanditiis natus fugiat, architecto nam
                maxime cupiditate, maiores illo nesciunt, aut corporis omnis
                molestiae.
              </p>
            </Col>
            <Col sm={12} md={6}>
              <iframe
                src="https://www.youtube.com/watch?v=EPCKma4e37Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              ></iframe>
            </Col>
          </Row>
        </div>
        <div className="px-5">
          <Row className="events-card">
            <Col sm={12} md={3}>
              <Card className="ev-1">
                <Card.Body>
                  <Card.Title>Events</Card.Title>
                  <Card.Subtitle className="mb-2">Consultancy</Card.Subtitle>
                  <Button className="bg-transparent border-light">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-2">
                <Card.Body>
                  <Card.Title>Event</Card.Title>
                  <Card.Subtitle className="mb-2">Production</Card.Subtitle>
                  <Button className="bg-transparent border-light">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-3">
                <Card.Body>
                  <Card.Title>Rental</Card.Title>
                  <Card.Subtitle className="mb-2">Services</Card.Subtitle>
                  <Button className="bg-transparent border-light">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={3}>
              <Card className="ev-4">
                <Card.Body>
                  <Card.Title>Destination</Card.Title>
                  <Card.Subtitle className="mb-2">
                    Management System
                  </Card.Subtitle>
                  <Button className="bg-transparent border-light">
                    learn more <ArrowRightCircle />{" "}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div>
            <h1 className="py-3">Blogs</h1>
            <Row className="border-bottom pb-5 blogs">
              <Col>
                <Card>
                  <Card.Img variant="top" src={intern001} />
                  <Card.Body>
                    <Card.Title>
                      Second International Conference on Public Health in Africa
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={intern002} />
                  <Card.Body>
                    <Card.Title>
                      The 17th IGF: Resilient Internet for a Shared Sustainable
                      and Common Future
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={intern003} />
                  <Card.Body>
                    <Card.Title>
                      Rwanda Tourism Week: Adopting innovative approaches to
                      boost intra-africa travel as a drive for tourism business
                      recovery
                    </Card.Title>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="bg-light ">
              {sponsorLogos.map((logo, index) => (
                <Col key={index} md={2}>
                  <img
                    src={logo}
                    alt={`Partner Logo ${index + 1}`}
                    className="partner-image"
                  />
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HomeBody;
