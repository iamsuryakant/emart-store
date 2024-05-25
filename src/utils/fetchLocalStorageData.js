export const fetchCart = () => {
    const cartInfo = localStorage.getItem('cartItem') !== undefined ? JSON.parse(localStorage.getItem('cartItem')) : localStorage.clear();
    return cartInfo ? cartInfo : [];
}