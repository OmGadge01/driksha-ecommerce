import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "react-hot-toast";

import "./index.css";

import App from "./App.jsx";

import { CartProvider } from "./context/CartContext";
import { CheckoutProvider } from "./context/CheckoutContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <CheckoutProvider>
        <App />

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,

            style: {
              borderRadius: "16px",
              padding: "14px 18px",
              fontSize: "14px",
            },
          }}
        />
      </CheckoutProvider>
    </CartProvider>
  </StrictMode>
);