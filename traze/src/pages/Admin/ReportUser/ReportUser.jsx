import "./ReportUser.css";
import reportimg from "../../../img/report.png";
import sampahimg from "../../../img/sampahBig.jpg";
import backArrow from "../../../img/backArrow.png";
import { Link } from "react-router-dom";

const ReportUser = () => {
  const user = "Ziella";
  const tanggal = "29 Juli 2021";
  const jam = "03:35 PM";
  return (
    <div className="reportUser">
      <div className="reportUser-container">
        <Link to="/maildesc">
          <img src={backArrow} alt="" />
        </Link>
        <img src={reportimg} alt="" />
      </div>
      <div className="reportUser-info">
        <h1>Report User</h1>
      </div>
      <div className="reportUser-desc">
        <div className="reportUser-desc-text">
          <p>
            Reported by <strong>{user}</strong> at
          </p>
          <div className="haritanggal-info">
            <p>{tanggal}</p>
            <p>{jam}</p>
          </div>
        </div>
        <img src={sampahimg} alt="" />
        <h4>Do you want to report this as a false report</h4>
      </div>
      <div className="button-report-container">
        <div className="button-info-report green-button">
          {" "}
          <strong>Yes</strong>
        </div>
        <div className="button-info-report">
          {" "}
          <strong>No</strong>{" "}
        </div>
      </div>
    </div>
  );
};

export default ReportUser;
