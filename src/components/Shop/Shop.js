import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);
  const totalPages = Math.ceil(count / dataPerPage);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&dataPerPage=${dataPerPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setCount(data.count);
      });
  }, [page, dataPerPage]);

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    const savedCart = [];
    const ids = Object.keys(storedCart);
    console.log(ids);
    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
          setCart(savedCart);
        }
      });
  }, [products]);
  const [cart, setCart] = useState([]);
  const clearCart = () => {
    setCart([]);
    localStorage.clear();
  };
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exist = cart.find((product) => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }

    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shopContainer">
      <div className="productsContainer">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addToCart={addToCart}
          ></Product>
        ))}
      </div>
      <div className="orderSummary">
        <Cart cart={cart} clearCart={clearCart}>
          <Link to="/shipping">
            <button className="reviewOrderBtn">
              <Link to="/orders">Orders</Link>
              <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
      <div className="pagination">
        {[...Array(totalPages).keys()].map((num) => (
          <button
            className={page === num && "selected"}
            onClick={() => setPage(num)}
            key={num}
          >
            {num + 1}
          </button>
        ))}
        <div className="perPageData">
          {/* <p>Data Per Page: {dataPerPage}</p> */}
          <select onChange={(event) => setDataPerPage(event.target.value)}>
            <option value="5">5</option>
            <option value="10" selected>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Shop;
