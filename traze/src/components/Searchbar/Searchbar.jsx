import React from "react";
import Cameraimg from "../../img/Camera.png";
import Searchimg from "../../img/search-icon-png-9972.png";

import "./Searchbar.css";

const Searchbar = () => {
  return (
    <div className="search-wrapper">
      <form action="/report/">
        <input id="searchbar" type="text" placeholder="Search..." />
      </form>
      <div className="camera-wrapper">
        <img src={Cameraimg} alt="" />
      </div>
    </div>
  );
};

export default Searchbar;
