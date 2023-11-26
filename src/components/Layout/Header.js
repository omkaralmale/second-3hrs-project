import React from "react";
import "./Header.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <header className="header">
      <h1>ShopKaro</h1>
      <HeaderButton onShow={props.onShow} />
    </header>
  );
};

export default Header;
