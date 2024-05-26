import { useStateValue } from "../context/StateProvider"
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

function CartItem({item}) {
  const {cartItems, setCartItems, quantity} = useStateValue(); 
  return (
    <div className='w-full p-1 px-2 rounded-lg bg-white flex items-center gap-2'>
      <img className='w-20 h-20 max-w-[60px] rounded-lg object-contain' src={item?.imageURL} alt={item?.name}/>
      <div className='flex flex-col gap-2'>
        <p className="text-base text-gray-900">{item?.name}</p>
        <p className="text-sm block text-gray-900 font-semibold">Rs {item?.price}</p>
      </div>
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
          <FaCircleMinus className="text-gray-900"/>
          <p className='w-5 h-5 rounded-sm bg-white text-gray-500 flex items-center justify-center'>{quantity}</p>
          <FaCirclePlus className="text-gray-900"/>
      </div>
    </div>
  )
}

export default CartItem