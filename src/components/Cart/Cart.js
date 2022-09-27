import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shipping + tax).toFixed(2);
  return (
    <div className="cart">
      <h3
        style={{
          paddingTop: "90px",
          fontSize: "35px",
          fontFamily: "Lato",
          marginBottom: "65px",
        }}
      >
        Order Summary
      </h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h4
        style={{
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "100px",
        }}
      >
        Grand Total: ${grandTotal}
      </h4>
      <button className="clearCartBtn">Clear Cart</button>
      <br />
      <button className="reviewOrderBtn">Review Order</button>
    </div>
  );
};

export default Cart;
