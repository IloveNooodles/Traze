import './Register.css';
import Facebook from '../../img/facebook.png';

const Register = () => {
  return (
    <div className="login-wrapper">
      <h2 className="judul">Sign Up</h2>
      <div className="img-wrap img-upload">
        <img src={Facebook} alt="Profile picture" />
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <div className="form-wrapper">
          <input type="file" onChange="" placeholder="Select a file..." />
          <h4>Input your username</h4>
          <input
            type="text"
            // onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />
          <h4>Input your Email</h4>
          <input type="text" placeholder="Email" />
          <h4>Input your Password</h4>
          <input
            type="password"
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />

          <button type="submit" className="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
