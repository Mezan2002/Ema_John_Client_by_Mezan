import React from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewProducts.css";
const ReviewProducts = ({ product, deleteHandler }) => {
  const { img, name, price, shipping, quantity, id } = product;
  return (
    <div className="reviewProdutsContainer">
      <div>
        <img style={{ width: "100px", height: "100px" }} src={img} alt="" />
      </div>
      <div className="reviewProductContainer">
        <div className="reviewProductDetail">
          <p>{name}</p>
          <p>
            <small>
              Price: <span style={{ color: "orange" }}>${price}</span>
            </small>
          </p>
          <p>
            <small>
              Shipping: <span style={{ color: "orange" }}>${shipping}</span>
            </small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="deleleProductBtn">
          <button className="deleteBtn" onClick={() => deleteHandler(id)}>
            <FontAwesomeIcon
              className="trashIcon"
              icon={faTrashCan}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewProducts;
