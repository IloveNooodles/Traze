import React, { useState } from "react";
import Logo from "../../img/logo.png";
import LogoOfficer from "../../img/logoTrazeOfficer.png";
import HamIcon from "../../img/Hamburger_icon.svg.png";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SidebarDataAdmin } from "./SidebarDataAdmin";

import "./Navbar.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const user = JSON.parse(localStorage.getItem('profile'));
  const isAdmin = (user?.result?.role === "officer")
  const data = (isAdmin ? SidebarDataAdmin : SidebarData);

  return (
    <div className="nav-wrap">
      <div className="img-wrap">
        <img
          src={isAdmin ? LogoOfficer : Logo}
          alt="Ini Logo"
          id="logoTraze"
          className={isAdmin ? "logo-admin" : ""}
        />
        <Link to="#" className="menu-bars">
          <img
            src={HamIcon}
            alt="logo hamburger icon"
            id="hamicon"
            onClick={showSidebar}
          />
        </Link>
      </div>
      <div className="navbar">
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className= {isAdmin ? "nav-menu-items editnavbar" : "nav-menu-items"} onClick={showSidebar}>
            {data.map((item) => {
              return (
                <li key={item.id} className={item.cName}>
                  <Link to={item.path}>
                    <strong>
                      <span>{item.title}</span>
                    </strong>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
