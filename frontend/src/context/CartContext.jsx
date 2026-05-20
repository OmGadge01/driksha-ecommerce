import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({
  children,
}) => {
  const [cartItems, setCartItems] =
    useState(() => {
      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingProduct =
        prev.find(
          (item) =>
            item.id === product.id
        );

      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total +
      Number(
        item.price.replace("Rs", "")
      ) *
        item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);