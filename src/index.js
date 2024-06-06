import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Import global CSS styles
import App from "./App"; // Import the main App component

const rootElement = document.getElementById("root"); // Get the root div
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* Wrap the App component in React.StrictMode for highlighting potential problems */}
    <App />
  </React.StrictMode>
);
