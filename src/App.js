import React from "react";

import "./App.css";
import "./Styles/app.scss";
import Header from "./Layout/Header";
import Index from "./Pages/Home/Index";

function App() {
  return (
    <div className="App">
      <Header />
      <Index />
    </div>
  );
}

export default App;
