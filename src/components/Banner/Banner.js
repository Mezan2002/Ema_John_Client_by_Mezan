import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="bannerContainer">
      <div className="bannerContent">
        <p>
          <small>Sale up to 70% off</small>
        </p>
        <h2>New Collection For Fall</h2>
        <p>Discover all the new arrivals of ready-to-wear collection.</p>
        <button>Shop Now</button>
      </div>
      <div className="bannerImage">
        <img
          src="https://images.unsplash.com/photo-1552573102-2b44b44d85b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
