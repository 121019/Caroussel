import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Assurez-vous que l'élément avec l'ID "root" existe dans votre index.html
const rootElement = document.getElementById("root");

// Créez une racine React et rendez votre application
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
