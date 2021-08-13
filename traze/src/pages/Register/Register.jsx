import './Register.css';
import Facebook from '../../img/facebook.png';
import Twit from '../../img/twit.png';
import Google from '../../img/google.png';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-wrapper">
      <img src={Logo} alt="" id="logotraze" />
      <h2 className="judul">Register</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div className="form-wrapper">
          <input type="text" placeholder="Full name" />
          <input
            type="text"
            // onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <input type="text" placeholder="Email" />
          <input
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <input type="text" placeholder="Address" />

          <button type="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
      <p>Or login with</p>
      <div className="logo-wrapper">
        <img src={Twit} alt="" />
        <img src={Google} alt="" />
        <img src={Facebook} alt="" />
      </div>
      <p>
        Have account? <Link to="/">Log in here</Link>
      </p>
    </div>
  );
};

export default Register;
