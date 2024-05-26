import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import emptyCart from '../assets/emptyCart.svg'
import { useStateValue } from '../context/StateProvider'
import CartItem from './CartItem';
import { useState } from 'react';

function CartContainer() {
  const [total, setTotal] = useState(0);
  const {cartItems, setCartItems, showCart, setShowCart} = useStateValue();

  const handleBackSpaceClick = () => {
    setShowCart(!showCart);
  }

  const handleClearCart = () => {
    setCartItems([]);
  }

  return (
    <div className='fixed top-0 right-0 w-full md:w-[375px] h-screen bg-white drop-shadow-md flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
            <div onClick={handleBackSpaceClick}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </div>
            <p className='text-textColor text-lg font-semibold'>Shopping Cart</p>
            <p className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base' onClick={handleClearCart}>Clear <RiRefreshFill/> </p>
        </div>

        {
            cartItems && cartItems.length > 0 ? (
                <div className='w-full h-full bg-gray-50 rounded-t-[2rem] flex flex-col'>
                    <div className='w-full h-[340px] md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
                        {
                            cartItems && cartItems.length > 0  && cartItems.map(item => (
                                <CartItem key={item.id} item = {item}/>
                            ))
                        }
                    </div>
                    
                <div className='w-full flex-1 bg-gray-200 rounded-t-[2rem] flex flex-col  items-center justify-evenly px-8 py-2'>
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-900 text-lg'>Subtotal</p>
                        <p className='text-gray-900 text-lg'>Rs 100 </p>
                    </div>
                    
                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-900 text-lg'>Shipping estimate</p>
                        <p className='text-gray-900 text-lg'>Rs 25</p>
                    </div>
                    
                    <div className='w-full border-b border-gray-600 my-2'></div>

                    <div className='w-full flex items-center justify-between'>
                        <p className='text-gray-900 text-lg'>Total</p>
                        <p className='text-gray-900 text-lg'>₹ {50 + 25}</p>
                    </div>

                    <button className='w-full p-2 rounded-full bg-gray-900 text-gray-50 text-lg my-2 hover:shadow-lg'>Proceed to Checkout</button>
              </div>  
            </div>

                
            ) : (
                <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                    <img src={emptyCart} className='w-300' alt='' />
                    <p className='text-gray-400 font-semibold text-xl'>Your cart is empty</p>
                </div> 
            )
        }  
    </div>
  )
}

export default CartContainer