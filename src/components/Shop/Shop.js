import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const [cart, setCart] = useState([]);
  const addToCart = (product) => setCart([...cart, product]);
  console.log(cart);

  return (
    <div className="shopContainer">
      <div className="productsContainer">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="orderSummary">
        <p
          style={{
            textAlign: "center",
            fontSize: "35px",
            fontFamily: "Lato",
            marginBottom: "65px",
          }}
        >
          Order Summary
        </p>
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${}</p>
        <p>Total Shipping Charge: $0</p>
        <p>Tax: $0</p>
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            marginBottom: "100px",
          }}
        >
          Grand Total: $0
        </p>
        <button className="clearCartBtn">Clear Cart</button>
        <br />
        <button className="reviewOrderBtn">Review Order</button>
      </div>
    </div>
  );
};

export default Shop;
