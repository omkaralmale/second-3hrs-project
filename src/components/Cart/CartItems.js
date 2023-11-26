import React from "react";
import "./CartItems.css";
const CartItems = (props) => {
  return (
    <li className="cart-item">
      {props.name}
      {props.L > 0 && (
        <div className="sizer">
          <span>Large</span> <span>{props.L}</span>
        </div>
      )}
      {props.M > 0 && (
        <div className="sizer">
          <span>Medium</span> <span>{props.M}</span>
        </div>
      )}
      {props.S > 0 && (
        <div className="sizer">
          <span>Small</span> <span>{props.S}</span>
        </div>
      )}
    </li>
  );
};

export default CartItems;
