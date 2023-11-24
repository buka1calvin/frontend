import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.css";

const BottomNavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [expanded, setExpanded] = useState(false);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false);
  };

  return (
    <Navbar
      className="custom-navbar border-bottom"
      collapseOnSelect
      sticky="top"
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(!expanded)}
        className=""
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link>
            <NavLink
              to="/"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </NavLink>
          </Nav.Link>
          <NavDropdown title="About" alignLeft className="dropdown fade-up">
            <NavDropdown.Item>
              <NavLink
                to="/about#who-we-are"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("who-we-are")}
              >
                Who We Are
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/about#board-of-directors"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("board-of-directors")}
              >
                Board of Directors
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/about#gala-dinner"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("gala-dinner")}
              >
                Tourism Award
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <NavLink
              to="/services"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("services")}
            >
              Services
            </NavLink>
          </Nav.Link>
          <NavDropdown title="Media" alignLeft className="dropdown fade-up">
            <NavDropdown.Item>
              <NavLink
                to="/publications"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("publications")}
              >
                Publications
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/press-releases"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("press-releases")}
              >
                Press Releases
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/blogs"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("blogs")}
              >
                Blogs
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/events"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("events")}
              >
                Events
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="Membership"
            alignLeft
            className="dropdown fade-up"
          >
            <NavDropdown.Item>
              <NavLink
                to="/members/benefits"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("membership-benefits")}
              >
                Membership Benefits
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/members/list"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("our-members")}
              >
                OUR MEMBERS
              </NavLink>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <NavLink
                to="/members/join"
                className="sub-link"
                activeClassName="active"
                onClick={() => onUpdateActiveLink("become-a-member")}
              >
                Become a Member
              </NavLink>
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <NavLink
              to="/contact"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("contact")}
            >
              Contact Us
            </NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink
              to="/faq"
              activeClassName="active"
              onClick={() => onUpdateActiveLink("faq")}
            >
              FAQ
            </NavLink>
          </Nav.Link>
        </Nav>
        <Form inline>
          <Nav.Link className="btn btn-covid">
            <NavLink to="/covid-19">
              <b>COVID-19</b>
            </NavLink>
          </Nav.Link>{" "}
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BottomNavBar;
