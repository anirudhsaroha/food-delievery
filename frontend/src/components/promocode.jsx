import React from 'react'
import { useFood } from '../context'


const PromoCode = () => {

    const { total } = useFood();

  return (
    <div className={` ${total === 0 ? 'hidden' : 'block' } w-full mb-10`}>
        <div>If you have a promo code, Enter it here</div>
        <div>
            <input placeholder='promo code' className='p-2 bg-gray-200  w-80 focus:outline-none text-slate-600' />
            <button className='p-2 bg-black text-white font-semibold w-36' >Submit</button>
        </div>
    </div>
  )
}

export default PromoCode