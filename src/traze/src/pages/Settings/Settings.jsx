import "./Settings.css";
import settings from "../../img/setting.png";
import backArrow from "../../img/backArrow.png";
import { Link } from "react-router-dom";

const Settings = () => {
  return (
    <div className="settings-info">
      <img src={settings} id="setting" />
      <h2>Settings</h2> <br />
      <div className="card">
        <h4 className="text">Facebook & Twitter</h4> <br />
        <h4 className="text">Save Photos</h4> <br />
        <h4 className="text">Submit Feedback</h4> <br />
        <h4 className="text">Clear History</h4>
      </div>
      <div id="backArrow">
        <Link to="/profile">
          <img src={backArrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Settings;
