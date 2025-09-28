import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Force a reload once after first load (for GitHub Pages SPA routing)
if (
  window.location.hostname.endsWith("github.io") &&
  !window.location.hash.includes("#reloaded") &&
  window.performance &&
  performance.navigation.type !== 1 // not a reload
) {
  window.location.replace(window.location.href + "#reloaded");
  window.location.reload();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
