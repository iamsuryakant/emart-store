import { fetchCart } from "../utils/fetchLocalStorageData";

const cartInfo = fetchCart();

export const initalState = {
    cartItems: cartInfo,
};