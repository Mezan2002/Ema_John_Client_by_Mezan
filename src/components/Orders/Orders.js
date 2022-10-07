import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import ReviewProducts from "../ReviewProducts/ReviewProducts";

const Orders = () => {
  const { products, orderCart } = useLoaderData();
  const [cart, setCart] = useState(orderCart);
  return (
    <div className="shopContainer">
      <div className="ordersContainer">
        {cart.map((product) => (
          <ReviewProducts key={product.id} product={product}></ReviewProducts>
        ))}
      </div>
      <div className="orderSummary">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
