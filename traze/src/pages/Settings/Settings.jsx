import './Settings.css';
import settings from '../../img/setting.png';

const Settings = () => {
  return (
    <div className="settings">
      <img src={settings} id="setting" />
      <h2>Settings</h2> <br />
      <div className="card">
        <h4 className="text">Facebook & Twitter</h4> <br />
        <h4 className="text">Save Photos</h4> <br />
        <h4 className="text">Submit Feedback</h4> <br />
        <h4 className="text">Clear History</h4>
      </div>
    </div>
  );
};

export default Settings;
