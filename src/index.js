import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";
import StoreWrapper from "./components/StoreWrapper/StoreWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StoreWrapper>
  </React.StrictMode>
);
