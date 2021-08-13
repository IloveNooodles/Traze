import "./Profile.css";
import dummyImage from "../../../img/facebook.png";
import Settings from "../../../img/setting.png";
import Exit from "../../../img/exit.png";
import Help from "../../../img/help.png";
import Layout from "../../../Layout";
import { Link } from "react-router-dom";

const ProfileAdmin = () => {
  const name = "Ujang";

  return (
    <Layout>
      <div className="myProfile">
        <div className="container-shape">
          <div id="circle">
            <img src={dummyImage} alt="" />
          </div>
        </div>
        <div className="text-container-profile">
          <Link to="/editprofile">
            <h2>{name}</h2>
          </Link>
          <p>Officer</p>
        </div>
        <div id="container-menu-wrapper">
          <Link to="/settings">
            <div className="menu-wrapper-profile">
              <img src={Settings} alt="" />
              <p>Settings</p>
            </div>
          </Link>
          <Link to="/help">
            <div className="menu-wrapper-profile">
              <img src={Help} alt="" />
              <p>Help</p>
            </div>
          </Link>
          <Link to="/">
            <div className="menu-wrapper-profile">
              <img src={Exit} alt="" />
              <p>Logout</p>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileAdmin;