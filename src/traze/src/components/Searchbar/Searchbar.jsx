import React from "react";
import Cameraimg from "../../img/Camera.png";
import { Link } from "react-router-dom";

import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <form action="/report/">
        <input id="searchbar" type="text" placeholder="Search..." />
      </form>
      <Link to="/report">
        <div className="camera-wrapper">
          <img src={Cameraimg} alt="" />
        </div>
      </Link>
    </div>
  );
};

export default Searchbar;
