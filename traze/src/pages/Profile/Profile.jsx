import { useHistory, Link } from "react-router-dom";

import "./Profile.css";
import dummyImage from "../../img/default-profile.jpg";
import Settings from "../../img/setting.png";
import Exit from "../../img/exit.png";
import Help from "../../img/help.png";
import Layout from "../../Layout";


const Profile = () => {
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('profile');

    history.go(0);
  }

  return (
    <Layout>
      <div className="myProfile">
        <div className="container-shape">
          <div id="circle">
            <img src={dummyImage} alt="" />
          </div>
        </div>
        <div className="text-container-profile">
          <Link to='/editprofile'>
            <h2>{user.result.name}</h2>
          </Link>
          <p>{user.result.score} {user.result.score === 1 ? "point" : "points"}</p>
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
          <Link to="/" onClick={logout}>
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

export default Profile;
