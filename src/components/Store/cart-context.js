import React from "react";

const cartContext = React.createContext({
  items: [],
  total: 0,
  addProduct: (item) => {},
  removeProduct: (id) => {},
});

export default cartContext;
