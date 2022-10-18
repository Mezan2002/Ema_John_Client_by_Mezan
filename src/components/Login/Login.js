import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="formContainer">
      <h2 className="formTitle">Login</h2>
      <form onSubmit={handleForm}>
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
