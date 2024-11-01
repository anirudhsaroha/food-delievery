import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom';
import { useFood } from '../context'


const Navbar = () => {
  const [ active, setActive ] = useState("home");
  const { show } = useFood();

  const handleClick = () => {
    setActive("");
  }

  return (
    <div className='flex items-center justify-between pt-5 mb-20' >
      <Link to='/' onClick={() => setActive("home")} >
        <img className='w-32' src={assets.logo} />
      </Link>
      <div className='flex items-center gap-4 md:gap-9 text-slate-700 font-medium' >
        <Link to='/' className={ active == "home" ? 'border-b-2 text-xs md:text-base border-slate-700 cursor-pointer duration-100' : 'md:text-base cursor-pointer duration-100 text-xs' } onClick={() => setActive("home") }>home</Link>
        <div className={ active == "menu" ? 'text-xs border-b-2 md:text-base border-slate-700 cursor-pointer duration-100' : 'md:text-base text-xs cursor-pointer duration-100' } onClick={() => setActive("menu") } >menu</div>
        <div className={ active == "contact" ? 'text-xs border-b-2 md:text-base border-slate-700 cursor-pointer duration-100' : 'md:text-base text-xs cursor-pointer duration-100' } onClick={() => setActive("contact") }>contact</div>
      </div>
      <div className='flex items-center gap-5 md:gap-12' >
        <img className='w-5 md:w-8' src={assets.search_icon} />
        <Link to='/cart' onClick={() => setActive("")} className='relative' >
          <div className={` ${show === true ? 'absolute' : 'hidden' } bg-orange-400 rounded-full h-2 w-2 md:h-3 md:w-3 bottom-0 right-0`} ></div>
          <img src={assets.bag_icon} className='w-5 md:w-8' />
        </Link>
        <Link to='/login' onClick={handleClick} className='border-2 text-center w-16 border-slate-700 rounded-3xl md:w-20 text-xs md:text-base hover:bg-slate-400 duration-100' >sign in</Link>
      </div>
    </div>
  )
}

export default Navbar
