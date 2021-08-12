import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../img/logo.png";
import Twit from "../../img/twit.png";
import Google from "../../img/google.png";
import Facebook from "../../img/facebook.png";
import "./Login.css";

async function loginUser(creds) {
  return fetch("http://localhost:8000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <h2 className="judul">Sign In</h2>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <a href="#">Forgot password ?</a>
          <button type="submit" className="submit">
            Login
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
        Don't have account? <a href="#">Sign Up Now</a>
      </p>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
