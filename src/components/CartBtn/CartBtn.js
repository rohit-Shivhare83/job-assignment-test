import React from "react";
import "./CartBtn.css";

const CartBtn = ({ num, click }) => {
  return (
    <div className="cart-btn px-3" onClick={() => click(true)}>
      <span>
        <i className="fa-regular fa-cart-shopping fs-3 fw-bold "></i>
      </span>
      <span className="bg-danger text-light fw-bold px-1">{num}</span>
    </div>
  );
};

export default CartBtn;
