import { useEffect, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import CartItems from "./CartItem";
import { useStateValue } from "../context/StateProvider";

function Card({ product }) {
  const { cartItems, setCartItems } = useStateValue();
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <>
      {
        product && product.length > 0 ? product.map(item => (
          <div key={item.name} className="bg-white max-w-xs rounded-2xl overflow-hidden drop-shadow-xl hover:shadow-xl transition duration-300 m-4">
            <img
              className="rounded-xl"
              src={item.imageURL}
              alt={item.name}
            />
            <div className="flex justify-between items-center p-4">
              <div>
              <h1 className="mt-2 text-xl font-medium">{item.name}</h1>
                <p className="mt-2">Rs {item.price} </p>
              </div>
            <div>
              <button
                onClick={() => handleAddToCart(item)}
                  className="text-white text-md font-semibold cursor-pointer bg-gray-900 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-3s transform-gpu hover:scale-110"
                >
                  Add to cart
                </button>
            </div>
            </div>
          </div>
        )) : (
            <div>We're working on it come back later.</div>
        )
      }
    </>
  )
}

export default Card