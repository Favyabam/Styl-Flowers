import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/StoreContext'

const ProductItem = ({id, name, price, image}) => {


    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden w-72'>
      <div className='relative'>
        <img src={image} alt="" className='w-full h-full object-cover' />
        {!cartItems[id]
            ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className='w-8 absolute bottom-3.5 right-3.5 bg-pink-400 cursor-pointer rounded-[50%]' />
            :<div className='absolute bottom-3.5 right-3.5 flex items-center gap-2.5 p-1.5 rounded[50%]'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" className='w-7' />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" className='w-7' />
            </div>
        }

      </div>
      <div className='p-4'>
        <p className='text-lg font-semibold text-gray-800'>{name}</p>
        <p className='text-pink-500 font-bold'>₦{price}</p>
      </div>
    </div>
  )
}

export default ProductItem
