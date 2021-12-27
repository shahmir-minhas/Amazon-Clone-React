import React, { Component } from "react";
import Logo from "../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={Logo} alt="" className="header__logo" />
        <div className="header__search">
          <input type="text" className="header__input-search" />
          <SearchIcon className="header__search-icon" />
        </div>
        <div className="header__nav">
          <div className="header__option">
            <span className="header__optionLine">Hello, Guest</span>
            Sign in
          </div>
          <div className="header__option">
            <span className="header__optionLine">Returns</span>& Orders
          </div>
          <div className="header__option">
            <span className="header__optionLine">Amazon</span>Prime
          </div>
          <div className="header__option-cart">
            <ShoppingCartIcon />
            <span className="header__count">0</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
