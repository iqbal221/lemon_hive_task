import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ContextRick from "./Context/ContextRick";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextRick>
      <App />
    </ContextRick>
  </React.StrictMode>
);
