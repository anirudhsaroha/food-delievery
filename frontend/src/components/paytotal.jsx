import React from 'react'
import { useFood } from '../context'
import { Link } from 'react-router-dom';


const PayTotal = () => {
    const { total } = useFood();
  return (
    <div className={`${total === 0 ? 'hidden' : '' } w-full mr-40 mb-10`} >
      <div><h1 className='text-4xl font-bold mb-7' >Cart Totals</h1></div>
      <div className='w-full flex justify-between items-center mb-5' >
        <div className='text-slate-600' >Subtotal</div>
        <div>{total}</div>
      </div>
      <div className='border border-slate-300 w-full mb-5' ></div>
      <div className='w-full flex justify-between items-center mb-5' >
        <div className='text-slate-600' >Deliery Fee</div>
        <div>2</div>
      </div>
      <div className='border border-slate-300 w-full mb-5' ></div>
      <div className='w-full flex justify-between items-center mb-10' >
        <div className='text-slate-600' >Total</div>
        <div>{2+total}</div>
      </div>
      <button className='bg-orange-500 text-white p-5 font-bold' >PROCEED TO PAYMENT</button>
    </div>
  )
}

export default PayTotal
