import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from './app/store';
// import { Provider } from 'react-redux';
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { BasketProvider } from "./Context/basketContext";
import reducer, { initialState } from "./Context/reducer";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <Router>
      <BasketProvider reducer={reducer} initialState={initialState}>
        <App />
      </BasketProvider>
    </Router>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
