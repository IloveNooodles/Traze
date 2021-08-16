import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as api from '../../api/index.js';
import Logo from '../../img/logo.png';
import Twit from '../../img/twit.png';
import Google from '../../img/google.png';
import Facebook from '../../img/facebook.png';
import './Login.css';


const Login = (props) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await api.signIn(formData);

      localStorage.setItem('profile', JSON.stringify(res.data));
      
      history.go(0);

    } catch (error) {
      console.log(error);
      window.alert("Username atau passwod salah");
    }
  };

  return (
    <div className="login-wrapper">
      <div>
        <img src={Logo} alt="" id="logotraze" />
      </div>
      <div className="penengah">
        <form onSubmit={handleSubmit}>
          <div className="form-wrapper">
            <strong>
              <h2 className="judul">Sign In</h2>
            </strong>
            <input
              type="text"
              onChange={(e) => setFormData({...formData, username: e.target.value})}
              placeholder="Username"
            />
            <input
              type="password"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
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
          Don't have account? <Link to="/register">Sign Up Now</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
