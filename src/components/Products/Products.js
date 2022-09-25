import React from "react";
import "./Products.css";

const Products = (props) => {
  return (
    <div className="productsContainer">
      <div className="productCard">
        <div className="productImg">
          <img
            src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/fbaf991a78bc4896a3e9ad7800abcec6_9366/Ultraboost_22_Shoes_Black_GZ0127_01_standard.jpg"
            alt=""
          />
        </div>
        <div className="productDetails">
          <p style={{ fontSize: "28px" }}>Product Name: </p>
          <p style={{ fontSize: "20px" }}>Product Price: </p>
          <div className="productDetailsFooter">
            <p style={{ fontSize: "18px" }}>Manufacturer: </p>
            <p style={{ fontSize: "18px" }}>Rating: </p>
          </div>
        </div>
        <div className="productCardFooter">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
