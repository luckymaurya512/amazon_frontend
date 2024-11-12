import React, { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex >= 0) {
      // If the product is already in the cart, increase the quantity
      const updatedCart = [...cartItems];
      updatedCart[existingProductIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it to the cart
      setCartItems((prevCart) => [
        ...prevCart,
        { ...product, quantity: 1 } // Initial quantity is set to 1
      ]);
    }
  };

  // Function to remove a product from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCart) => prevCart.filter(item => item.id !== productId));
  };

  // Function to update the quantity of a product in the cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};
