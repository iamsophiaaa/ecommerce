import { createContext, useContext, useState, useMemo } from "react";
import { initialProducts } from "../data/product";
const CartContext = createContext();
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const products = initialProducts;
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  //remove item from cart
  const removeFromCart = (productId, removeAll) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id == productId);
      if (!existingItem) {
        return prevCart;
      }
      if (removeAll || existingItem.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      }
    });
  };

  //remove cart
  const clearCart = () => setCart([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const cartTotalPrice = useMemo(
    () => cart.reduce((total, item) => total + item.price * item.quantity, 0),
    [cart],
  );

  return (
    <CartContext.Provider
      value={{
        products,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotalPrice,
        cartCount,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
