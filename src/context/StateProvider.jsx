import { createContext, useContext, useEffect, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const addToCartItem = item => {
    setCartItems(prevItems => [...prevItems, { ...item, qty: 1 }]);
  };

  const updateToCartItem = item => {
    setCartItems(prevItems =>
      prevItems.map(cartItem => (cartItem.id === item.id ? item : cartItem))
    );
  };

  const deleteCartItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return (
    <StateContext.Provider
      value={{
        cartItems,
        setCartItems,
        showCart,
        setShowCart,
        total,
        setTotal,
        quantity,
        setQuantity,
        addToCartItem,
        updateToCartItem,
        deleteCartItem,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
