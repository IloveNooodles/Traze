import React from "react";
import Logo from "../../img/logo.png";
import HamIcon from "../../img/Hamburger_icon.svg.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrap">
      <div className="img-wrap">
        <img src={Logo} alt="Ini Logo" />
      </div>
      <img src={HamIcon} alt="logo hamburger icon" id="hamicon" />
    </div>
  );
};

export default Navbar;
