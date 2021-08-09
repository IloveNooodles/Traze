import React from "react";
import Logo from "../../img/logo.png";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-wrap">
      <img src={Logo} alt="Ini Logo" />
    </div>
  );
};

export default Navbar;
