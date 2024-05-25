export const actionType = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART'
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_TO_CART:
            const existingItem = state.cartItems.find(item => item.id === action.item.id);

            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.id === action.item.id ? {
                        ...item,
                        quantity: item.quantity + 1
                    } : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
                };
            }
        case actionType.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.id)
            }
        case actionType.UPDATE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.id ? { ...item, quantity: item.quantity } : item)
            }
        case actionType.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
};

export default reducer;