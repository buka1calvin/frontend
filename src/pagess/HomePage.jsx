import React from "react";
import HomeBody from "../home/HomeBody";
import NavBarPage from "./NavBarPage";
import FouterBar from "../footer/FouterBar";

const HomePage = () => {
  return (
    <div className="home-styles">
      <NavBarPage />
      <HomeBody />
      <FouterBar />
    </div>
  );
};

export default HomePage;
