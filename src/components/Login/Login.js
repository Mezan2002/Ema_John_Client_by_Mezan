import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <div className="formContainer">
      <h2 className="formTitle">Login</h2>
      <form>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input className="submitBtn" type="submit" value="Login" />
        <p className="links">
          new to ema john <Link to="/signup">create an account</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
