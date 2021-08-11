import "./Profile.css";
import dummyImage from "../../img/facebook.png";
import Settings from "../../img/setting.png";
import Exit from "../../img/exit.png";
import Help from "../../img/help.png";
import Arrow from "../../img/backArrow-png";

const Profile = () => {
  return (
    <div className="myProfile">
      <img src={Arrow} alt="back-button" id="backbutton" />
      <div className="container-shape">
        <div id="circle">
          <img src={dummyImage} alt="" />
        </div>
      </div>
      <div className="text-container-profile">
        <h2>Ziella</h2>
        <p>2021 Points</p>
      </div>
      <div id="container-menu-wrapper">
        <div className="menu-wrapper-profile">
          <img src={Settings} alt="" />
          <p>Settings</p>
        </div>
        <div className="menu-wrapper-profile">
          <img src={Help} alt="" />
          <p>Help</p>
        </div>
        <div className="menu-wrapper-profile">
          <img src={Exit} alt="" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
