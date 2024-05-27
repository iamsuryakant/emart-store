import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);

    return (
      <StateContext.Provider
        value={{ cartItems, setCartItems, showCart, setShowCart }}
      >
        {children}
      </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);