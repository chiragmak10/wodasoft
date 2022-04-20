import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./views/App";
import { css, Global } from "@emotion/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
