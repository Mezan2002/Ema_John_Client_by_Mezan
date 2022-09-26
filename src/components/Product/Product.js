import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const { addToCart } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="productInfo">
        <p
          style={{
            fontSize: "21px",
            lineHeight: "20px",
            fontFamily: "Lato",
            marginTop: "7px",
          }}
        >
          {name}
        </p>
        <p style={{ fontSize: "19px", lineHeight: "10px" }}>Price: ${price}</p>
        <p style={{ lineHeight: "10px" }}>
          <small>Manufacturer: {seller}</small>
        </p>
        <p style={{ lineHeight: "10px" }}>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button
        onClick={() => {
          addToCart(props.product);
        }}
        className="addToCartBtn"
      >
        <p>Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
