import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./SignUp.css";

const SignUp = () => {
  const { loginWithEmailAndPassword } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password.length < 6) {
      setError("password should be 6 charcter or more");
    } else if (password !== confirmPassword) {
      setError("password is not matched with confirm password");
    }
    console.log(email, password, confirmPassword);

    loginWithEmailAndPassword(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Sign Up</h2>
      <form onSubmit={handleSubmit}>
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
        <h4 className="errorMessage">{error}</h4>
      </form>
    </div>
  );
};

export default SignUp;
