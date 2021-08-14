import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

import * as api from '../../api/index.js';
import './Register.css';
import Facebook from '../../img/facebook.png';
import Twit from '../../img/twit.png';
import Google from '../../img/google.png';
import Logo from '../../img/logo.png';


const Register = () => {
  const [formData, setFormData] = useState({ username: "", name: "", password: "", confirmPassword: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await api.signUp(formData);

      localStorage.setItem('profile', JSON.stringify(res.data));
      
      history.go(0);

    } catch (error) {
      console.log(error.response);
      window.alert("Teliti kembali data form Anda.");
    }
  };


  return (
    <div className="login-wrapper">
      <img src={Logo} alt="" id="logotraze" />
      <h2 className="judul">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <input 
          name="name" 
          type="text" 
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Full Name" />
          <input
            name="username"
            type="text"
            onChange={(e) => setFormData({...formData, username: e.target.value})}
            placeholder="Username"
          />
          <input 
            name="email" 
            type="email" 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="Email" />
          <input
            name="password"
            type="password"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            placeholder="Password"
          />
          <input
            name="confimPassword"
            type="password"
            onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
            placeholder="Confirm Password"
          />

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
