import { useEffect, useState } from 'react';
import { useStateValue } from '../context/StateProvider';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';

function CartItem({ item }) {
  console.log(item);
  const { cartItems, setCartItems } = useStateValue();
  const [quantity, setQuantity] = useState(1);
  const [maxQty, setMaxQty] = useState(false);
  const [minQty, setMinQty] = useState(false);

  // console.log(cartItems);

  // Modifying cartItems
  const handlePlusButtonClick = id => {
    // console.log(id);
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, qty: item.qty + 1 };
      }

      return item;
    });
    setCartItems(updatedCartItems);
  };

  const handleMinusButtonClick = id => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        if (item.qty > 1) {
          return { ...item, qty: item.qty - 1 };
        }
      }

      return item;
    });

    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      cartItems.forEach(item => {
        if (item.qty) {
          setQuantity(item.qty);
        }
      });
    }
  }, [cartItems]);

  return (
    <div className='w-full p-1 px-2 rounded-lg bg-white flex items-center gap-2'>
      <img
        className='w-20 h-20 max-w-[60px] rounded-lg object-contain'
        src={item?.imageURL}
        alt={item?.name}
      />
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-900'>{item?.name}</p>
        <p className='text-sm block text-gray-900 font-semibold'>
          Rs {item?.price}
        </p>
      </div>
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <button>
          <FaCircleMinus
            className='text-gray-900'
            onClick={() => handleMinusButtonClick(item.id)}
          />
        </button>
        <p className='w-5 h-5 rounded-sm bg-white text-gray-500 flex items-center justify-center'>
          {quantity}
        </p>
        <button>
          <FaCirclePlus
            className='text-gray-900'
            onClick={() => handlePlusButtonClick(item.id)}
          />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
