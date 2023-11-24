import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";
import search from "../../../assets/assetss/search-icon.svg";
import facebook from "../../../assets/assetss/facebook-icon.svg";
import tweeter from "../../../assets/assetss/twitter-icon.svg";
import linkedin from "../../../assets/assetss/linkedin-icon.svg";
import youtube from "../../../assets/assetss/youtube-icon.svg";
import flickr from "../../../assets/assetss/flickr-icon.svg";
import instagram from "../../../assets/assetss/instagram-icon.svg";
import "./index.css";

const TopNavBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 576);

  const handleSearchClick = () => {
    setSearchVisible(!searchVisible);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 576); 
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {isSmallScreen ? (

        null
      ) : (
        <Navbar className={`top-nav ${searchVisible ? 'search-visible' : ''}`} expand="md">
          <Container>
            <Nav className="mr-auto">
              {searchVisible && (
                <Form inline className="">
                  <FormControl
                    type="text"
                    placeholder="Search"
                    className="search mr-sm-2 "
                    value={searchInput}
                    onChange={handleInputChange}
                  />
                </Form>
              )}
            </Nav>
            <Nav className="icon-nav ">
              <div className="social-icon">
                <img src={search} alt="" onClick={handleSearchClick} />
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
                <a href="#">
                  <img src={tweeter} alt="" />
                </a>
                <a href="#">
                  <img src={youtube} alt="" />
                </a>
                <a href="#">
                  <img src={linkedin} alt="" />
                </a>
                <a href="#">
                  <img src={instagram} alt="" />
                </a>
                <a href="#">
                  <img src={flickr} alt="" />
                </a>
              </div>
            </Nav>
          </Container>
        </Navbar>
      )}
    </React.Fragment>
  );
};

export default TopNavBar;
