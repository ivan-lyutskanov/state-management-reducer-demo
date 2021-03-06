import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { StoreProvider } from "./store/Store";
import App from "./App";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
