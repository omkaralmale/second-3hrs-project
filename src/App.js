import React, { useState } from "react";
import Header from "./components/Layout/Header.js";
import AddForm from "./components/Products/AddForm.js";
import Products from "./components/Products/Products.js";
import Cart from "./components/Cart/Cart.js";
import CartProvider from "./components/Store/CartProvider.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleCartVisibility = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };
  // console.log(products);
  return (
    <CartProvider>
      {showCart && <Cart onClose={handleCloseCart} />}
      <header>
        <Header onShow={handleCartVisibility} />
      </header>
      <main>
        <AddForm onSend={handleAddProduct} />
        <Products productList={products} />
      </main>
    </CartProvider>
  );
};

export default App;
