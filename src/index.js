import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactsProvider } from "./context/ContactsContext";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>,
);
