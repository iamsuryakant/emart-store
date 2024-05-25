import { createContext, useContext, useState } from "react";

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <StateContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateValue = () => useContext(StateContext);