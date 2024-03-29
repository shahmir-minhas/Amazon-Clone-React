import React, { Component } from "react";
import Logo from "../Assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useBasket } from "./../Context/basketContext";
import { auth } from "../Firebase/firebase";

const Header = () => {
  const [state, dispatch ] = useBasket();
  console.log("state.user", state.user);
  const handleAuth = () => {
    if (state?.user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img src={Logo} alt="" className="header__logo" />
        </Link>
        <div className="header__search">
          <input type="text" className="header__input-search" />
          <SearchIcon className="header__search-icon" />
        </div>
        <div className="header__nav">
          <Link to="/login">
            <div className="header__option" onClick={handleAuth}>
              <span className="header__optionLine">
                {state?.user ? state.user.email : "Hello, Guest"}
              </span>
              {state.user ? "Sign out" : "Sign in"}
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLine">Returns</span>& Orders
          </div>
          <div className="header__option">
            <span className="header__optionLine">Amazon</span>Prime
          </div>
          <Link to="/checkout">
            <div className="header__option-cart">
              <ShoppingCartIcon />
              <span className="header__count">{state?.basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
