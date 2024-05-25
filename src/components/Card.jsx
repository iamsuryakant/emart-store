import { useEffect, useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import CartItems from "./CartItems";

function Card({ product, handleAddToCart}) {
  const {id, name, imageURL, price} = product;
  const [inCart, setInCart] = useState(false);
  const [qty, setQty] = useState(0);

  // useEffect(() => {
  //   const ItemsInCart = cartItems.find(item => item.id == id);
  // })

  // const { imageURL, name, price, currency, color, gender, quantity } = props;
  
  function handleAddToCartInCard() { 
    setInCart(true);
    setQty(prevQty => prevQty + 1);
  }

  function handleQuantityChange(e) {
    setQty(e.target.value);
  }

  useEffect(() => {
    handleAddToCart(qty);
  }, [qty]);

  return (
    <div className="bg-white max-w-xs rounded-2xl overflow-hidden drop-shadow-xl hover:shadow-xl transition duration-300 m-4">
        <img
          className="rounded-xl"
          src={imageURL}
          alt={name}
        />
        <div className="flex justify-between items-center p-4">
          <div>
          <h1 className="mt-2 text-xl font-medium">{name}</h1>
            <p className="mt-2">Rs {price} </p>
          </div>
          <div>
          {inCart ? (
            <div className="flex items-center">
              <button 
                onClick={() => setQty(Math.max(1, qty - 1))} 
                className="text-md font-semibold py-1 px-2"
              >
                <FaCircleMinus className="h-6 w-6" />
              </button>
              <input
                type="number"
                value={qty}
                onChange={handleQuantityChange}
                className="w-10 mx-1 text-center border-2 border-gray-200 rounded-full"
                min="1"
              />
              <button 
                onClick={() => setQty(qty + 1)} 
                className="text-md font-semibold py-1 px-2"
              >
               <FaCirclePlus className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <button
              onClick={handleAddToCartInCard}
              className="text-white text-md font-semibold bg-gray-900 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
            >
              Add to cart
            </button>
          )}
        </div>
        </div>
      </div>
  )
}

export default Card