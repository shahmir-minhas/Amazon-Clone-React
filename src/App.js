import React from "react";

import "./App.css";
import "./Styles/app.scss";
import Header from "./Layout/Header";
import Index from "./Pages/Home/Index";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Pages/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* <Route path="expenses" element={<Expenses />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;

