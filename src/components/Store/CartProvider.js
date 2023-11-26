import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCart = {
  items: [],
  total: 0,
};

const reducer = (state, action) => {
  if (action.type === "add") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotal =
      state.total +
      action.item.price * (action.item.L + action.item.M + action.item.S);
    return { items: updatedItems, total: updatedTotal };
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultCart);

  const handleAdd = (item) => {
    dispatch({
      type: "add",
      item: item,
    });
  };
  const handleRemove = (id) => {
    dispatch({
      type: "remove",
      id: id,
    });
  };

  const cartContext = {
    items: state.items,
    total: state.total,
    addProduct: handleAdd,
    removeProduct: handleRemove,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
