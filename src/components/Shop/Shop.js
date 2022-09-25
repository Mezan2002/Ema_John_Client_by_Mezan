import React, { useEffect, useState } from "react";
import Products from "../Products/Products";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shopContainer">
      <div className="productContainer">
        {products.map((product) => (
          <Products product={product} key={product.id}></Products>
        ))}
      </div>
      <div className="orderSummury">
        <h3>This is for order summury</h3>
      </div>
    </div>
  );
};

export default Shop;
