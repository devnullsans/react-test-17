import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/vendor.css";
import "./css/custom.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
