import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Header = () => {
  return (
    <div className='mb-5' >
        <div className='relative' >
          <img src={assets.header_img}/>
          <div className='absolute top-1/4 left-10' >
            <div className='mb-2 md:mb-1' >
              <div className='text-white text-xl md:text-3xl w-48 md:w-72 lg:w-[34rem] lg:text-5xl font-bold' >Order your favourite food here</div>
            </div>
            <div className='hidden md:block mb-3' >
              <div className='text-white text-xs lg:text-base' >Choose from a diverse menu featuring a delectable array of dishes crafted with the finest</div>
              <div className='text-white text-xs lg:text-base'>ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your</div>
              <div className='text-white text-xs lg:text-base'>dining experience, one delicious meal at a time.</div>
            </div>
            <button className='w-24 md:w-28 p-2 lg:p-4 lg:w-36 hover:bg-slate-200 rounded-3xl bg-white text-xs md:text-base text-slate-700' >View Menu</button>
          </div>
        </div>
    </div>
  )
}

export default Header
