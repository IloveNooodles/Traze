import "./404page.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <div className="container">
        <h2>Sorry...</h2>
        <h3>Unfortunately, this page doesn't exist</h3>
        <Link to="/home">back to home page</Link>
      </div>
    </div>
  );
};

export default NotFound;
