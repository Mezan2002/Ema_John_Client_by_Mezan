import React from "react";
import "./ReviewProducts.css";
const ReviewProducts = ({ product }) => {
  const { img, name, price, shipping, quantity } = product;
  return (
    <div className="reviewProdutsContainer">
      <div>
        <img style={{ width: "100px", height: "100px" }} src={img} alt="" />
      </div>
      <div className="reviewProductContainer">
        <div className="reviewProductDetail">
          <p>{name}</p>
          <p>
            <small>Price: {price}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="deleleProductBtn">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
