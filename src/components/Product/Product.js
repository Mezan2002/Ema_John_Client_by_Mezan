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
            fontFamily: "Roboto",
            fontSize: "21px",
            lineHeight: "25px",
            marginTop: "7px",
            fontWeight: "bold",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontSize: "20px",
            lineHeight: "10px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: "#ff9900",
          }}
        >
          Price: ${price}
        </p>
        <p style={{ lineHeight: "10px", fontFamily: "Roboto" }}>
          <small>Manufacturer: {seller}</small>
        </p>
        <p style={{ lineHeight: "10px", fontFamily: "Roboto" }}>
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
