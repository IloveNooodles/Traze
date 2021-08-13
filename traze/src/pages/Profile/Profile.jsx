import "./Profile.css";
import dummyImage from "../../img/facebook.png";
import Settings from "../../img/setting.png";
import Exit from "../../img/exit.png";
import Help from "../../img/help.png";
import Layout from "../../Layout";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Layout>
      <div className="myProfile">
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
            <Link to="/help">Settings</Link>
          </div>
          <div className="menu-wrapper-profile">
            <img src={Help} alt="" />
            <Link to="/help">Help</Link>
          </div>
          <div className="menu-wrapper-profile">
            <img src={Exit} alt="" />
            <Link to="/help">Logout</Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
