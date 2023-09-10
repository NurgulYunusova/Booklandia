import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";
import { WishlistProvider } from "./context/WishlistContext.jsx";
import { BasketProvider } from "./context/BasketContext.jsx";
import { BookProvider } from "./context/BookContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <BookProvider>
          <WishlistProvider>
            <BasketProvider>
              <App />
            </BasketProvider>
          </WishlistProvider>
        </BookProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
