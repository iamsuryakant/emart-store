import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useStateValue } from "../context/StateProvider";
import { useState } from "react";

function Card({ product }) {
  const { cartItems, setCartItems } = useStateValue();
  // console.log(cartItems);
  const handleAddToCart = item => {
    // console.log(item);
    let newItems = { ...item, qty: 1 };
    setCartItems([...cartItems, newItems]);
  };

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
                  className='text-white text-lg font-medium cursor-pointer bg-gray-900 py-2 px-4 rounded-full shadow-md hover:shadow-lg'
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