import React, { useState, useEffect } from "react";

import "./App.css";
import "./Styles/app.scss";
import Header from "./Layout/Header";
import Index from "./Pages/Home/Index";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";
import Login from "./Pages/Auth/Login";
import { auth } from "./Firebase/firebase";
import { useBasket } from './Context/basketContext';

function App() {
  const [{user}, dispatch] = useBasket();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("auth user:", authUser);
      authUser
        ? dispatch({
            type: "SET_USER",
            user: authUser,
          })
        : dispatch({
            type: "SET_USER",
            user: null, 
          });
    });
  },[]);
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
