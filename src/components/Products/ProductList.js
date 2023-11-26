import React, { useState, useContext } from "react";
import "./ProductList.css";
import CartProvider from "../Store/CartProvider";
import cartContext from "../Store/cart-context";

const ProductList = (props) => {
  const ctx = useContext(cartContext);
  const [largeStock, setLargeStock] = useState(props.L);
  const [mediumStock, setMediumStock] = useState(props.M);
  const [smallStock, setSmallStock] = useState(props.S);
  const addLarge = (event) => {
    if (largeStock < 1) {
      return;
    }
    ctx.addProduct({
      name: props.name,
      description: props.description,
      price: props.price,
      L: 1,
      M: 0,
      S: 0,
    });
    setLargeStock(largeStock - 1);
  };
  const addMedium = (event) => {
    if (mediumStock < 1) {
      return;
    }
    ctx.addProduct({
      name: props.name,
      description: props.description,
      price: props.price,
      L: 0,
      M: 1,
      S: 0,
    });
    setMediumStock(mediumStock - 1);
  };
  const addSmall = (event) => {
    if (smallStock < 1) {
      return;
    }
    ctx.addProduct({
      name: props.name,
      description: props.description,
      price: props.price,
      L: 0,
      M: 0,
      S: 1,
    });
    setSmallStock(smallStock - 1);
  };
  // console.log(props);
  return (
    <CartProvider>
      <li key={Math.random().toString()}>
        <div className="main">
          <div className="first">
            <h3>{props.name}</h3>
          </div>
          <div className="second">
            <button onClick={addLarge}>Buy Large {largeStock}</button>
            <button onClick={addMedium}>Buy Medium {mediumStock}</button>
            <button onClick={addSmall}>Buy Small {smallStock}</button>
          </div>
          <h2>{props.price}</h2>
        </div>
      </li>
    </CartProvider>
  );
};

export default ProductList;
