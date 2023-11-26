import React, { useContext } from "react";
import "./HeaderButton.css";
import cartContext from "../Store/cart-context";

const HeaderButton = (props) => {
  const context = useContext(cartContext);

  const len = context.items.length;
  // console.log(context.items);
  return (
    <button className="cart-button" onClick={props.onShow}>
      <span>🛒</span>
      <span>Cart</span>
      <span className="badge">{len}</span>
    </button>
  );
};

export default HeaderButton;
