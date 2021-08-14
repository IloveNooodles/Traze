import "./EditProfile.css";
import backArrow from "../../img/backArrow.png";
import facebookimg from "../../img/facebook.png";
import { Link } from "react-router-dom";
const EditProfile = () => {
  return (
    <div className="editprofile">
      <Link to="/profile">
        <img src={backArrow} alt="" />
      </Link>
      <h1>Edit Profile</h1>
      <div className="editprofile-container">
        <img src={facebookimg} alt="" id="profilepicture" />
        <p>Change profile picture</p>
      </div>
      <div className="editprofile-input">
        <form action="">
          <p>Name</p>
          <input type="text" className="form-editprofile" />
        </form>
      </div>
      <div className="editprofile-input">
        <form action="">
          <p>Email</p>
          <input type="text" className="form-editprofile" />
        </form>
      </div>
      <div className="editprofile-input">
        <form action="">
          <p>Password</p>
          <input type="password" className="form-editprofile" />
        </form>
      </div>

      <div className="editprofile-button">
        <div className="editbtn">
          <p>
            {" "}
            <strong>Save Changes</strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
