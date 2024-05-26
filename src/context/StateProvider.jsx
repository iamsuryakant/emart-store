import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const [quantity, setQuantity] = useState(0);

    return (
        <StateContext.Provider value={{cartItems, setCartItems, showCart, setShowCart, quantity, setQuantity}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);