import {
  createContext,
  useContext,
  useState,
} from "react";

const CheckoutContext =
  createContext();

export const CheckoutProvider = ({
  children,
}) => {
  const [checkoutItems, setCheckoutItems] =
    useState([]);

  const startCheckout = (items) => {
    setCheckoutItems(items);
  };

  const clearCheckout = () => {
    setCheckoutItems([]);
  };

  const subtotal = checkoutItems.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("$", "")
      ) *
        item.quantity,
    0
  );

  const shipping = subtotal > 500 ? 0 : 20;

  const tax = subtotal * 0.18;

  const total =
    subtotal + shipping + tax;

  return (
    <CheckoutContext.Provider
      value={{
        checkoutItems,
        startCheckout,
        clearCheckout,
        subtotal,
        shipping,
        tax,
        total,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () =>
  useContext(CheckoutContext);