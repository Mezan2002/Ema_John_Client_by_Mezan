import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>this is from about</h2>
      <p>username : {user?.email}</p>
    </div>
  );
};

export default About;
