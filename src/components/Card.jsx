import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useStateValue } from "../context/StateProvider";
import { useEffect, useState } from 'react';

function Card({ product }) {
  const { cartItems, setCartItems } = useStateValue();
  const [isClickAllowed, setIsClickAllowed] = useState({});

  const handleAddToCart = item => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    let newItems;

    if (existingItem) {
      newItems = cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, qty: cartItem.qty + 1 }
          : cartItem
      );
    } else {
      newItems = [...cartItems, { ...item, qty: 1 }];
    }

    setCartItems(newItems);
  };

  useEffect(() => {
    let updatedButtonsState = {};
    cartItems.forEach(cartItem => {
      if (cartItem.qty >= cartItem.quantity) {
        updatedButtonsState[cartItem.id] = true;
      } else {
        updatedButtonsState[cartItem.id] = false;
      }
    });

    setIsClickAllowed(updatedButtonsState);
  }, [cartItems]);

  return (
    <>
      {product && product.length > 0 ? (
        product.map(item => (
          <div
            key={item.id}
            className='bg-white max-w-xs rounded-3xl overflow-hidden drop-shadow-xl hover:shadow-xl m-4'
          >
            <img className='rounded-3xl' src={item.imageURL} alt={item.name} />
            <div className='flex justify-between items-center p-4'>
              <div>
                <h1 className='mt-2 text-xl font-medium'>{item.name}</h1>
                <p className='mt-2'>Rs {item.price} </p>
              </div>
              <div>
                <button
                  onClick={() => handleAddToCart(item)}
                  className={`text-white text-lg font-medium cursor-pointer ${
                    isClickAllowed[item.id] ? 'bg-gray-600' : 'bg-gray-900'
                  } py-2 px-4 rounded-full shadow-md hover:shadow-lg`}
                  disabled={isClickAllowed[item.id]}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>We&apos;re working on it come back later.</div>
      )}
    </>
  );
}

export default Card