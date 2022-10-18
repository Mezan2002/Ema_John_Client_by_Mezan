import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="formContainer">
      <h2 className="formTitle">Sign Up</h2>
      <form>
        <div className="formControl">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="formControl">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="formControl">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" required />
        </div>
        <input className="submitBtn" type="submit" value="Login" />
        <p className="links">
          already have an account <Link to="/login">login</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
