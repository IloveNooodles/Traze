import React from "react";
import Logo from "../../img/logo.png";
import HamIcon from "../../img/Hamburger_icon.svg.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrap">
      <div className="img-wrap">
        <img src={Logo} alt="Ini Logo" id="logoTraze" />
        <img src={HamIcon} alt="logo hamburger icon" id="hamicon" />
      </div>
      <div id="mylinks">
        <a href="#">Home</a>
        <a href="#">Leaderboard</a>
        <a href="#">History</a>
        <a href="#">Profile</a>
      </div>
    </div>
  );
};

export default Navbar;
