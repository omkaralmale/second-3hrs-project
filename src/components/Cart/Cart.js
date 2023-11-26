import React, { useContext } from "react";
import Modal from "../UI/Modal";
import cartContext from "../Store/cart-context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const ctx = useContext(cartContext);
  const CartItem = (
    <ol>
      {ctx.items.map((item, index) => {
        return (
          <CartItems
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
            L={item.L}
            M={item.M}
            S={item.S}
          />
        );
      })}
    </ol>
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItem}
      <div>
        <span> Total </span> <span> {ctx.total} </span>
      </div>
      <div>
        <button onClick={props.onClose}>Cancel</button>
        <button>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
