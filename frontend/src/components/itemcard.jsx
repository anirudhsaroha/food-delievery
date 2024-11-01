import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { useFood } from '../context';


const ItemCard = ({id, name, price, img, des, cat}) => {

  const {cartItems , addToCart , removeFromCart} = useFood();

  return (
    <div className=' shadow-gray-300 shadow-md pb-5 relative' >
        <img src={img} className='rounded-xl mb-8 w-full' />
        {
            !cartItems[id] ? <img src={assets.add_icon_white} onClick={() => addToCart(id)} className='w-10 absolute right-3 top-1/2 h-10' /> :
             <div className='absolute top-1/2 right-3 flex items-center bg-white rounded-2xl p-1' >
                <img src={assets.add_icon_green}  onClick={() => addToCart(id)} />
                <div className='mr-1 ml-1'>{cartItems[id]}</div>
                <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} />
             </div>
        }
        <div className='pl-2 pr-2 flex justify-between items-center mb-3' >
            <div className='text-xl font-medium' >
            {name}
            </div>
            <img src={assets.rating_starts} className='w-24 h-4' />
        </div>
        <div className='pl-2 pr-2 text-xs text-slate-500 mb-3' >{des}</div>
        <div className='pl-2 pr-2 text-xl text-orange-600' >${price}</div>
    </div>
  )
}

export default ItemCard
