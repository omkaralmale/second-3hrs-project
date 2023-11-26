import React from "react";
import ProductList from "./ProductList";

const Products = (props) => {
  // console.log(props.productList);
  const List = (
    <ol>
      {props.productList.map((item) => {
        return (
          <ProductList
            key={item.name}
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
    <div>
      <ul>{List}</ul>
    </div>
  );
};

export default Products;
