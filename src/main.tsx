import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this is where your main app logic is
import "./index.css"; // Import your CSS for global styles
import { ThemeProvider } from "./theme-provider"; // Ensure ThemeProvider is correctly imported
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
