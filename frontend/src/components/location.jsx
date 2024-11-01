import React from 'react'

const Location = () => {
  return (
    <div>
        <form>
            <div className='flex gap-5 mb-5' >
            <input placeholder='First Name' className='p-2  focus:outline-none w-full border border-slate-600' />
            <input placeholder='Last Name' className='p-2  focus:outline-none w-full border border-slate-600' />
            </div>
            <input placeholder='Email address' className='p-2  focus:outline-none w-full border border-slate-600 mb-5' />
            <input placeholder='Street' className='p-2  focus:outline-none w-full border border-slate-600 mb-5' />

            <div className='flex mb-5 gap-5' >
            <input placeholder='City' className='p-2  focus:outline-none w-full border border-slate-600' />
            <input placeholder='State' className='p-2  focus:outline-none w-full border border-slate-600' />
            </div>
            <div className='flex mb-5 gap-5' >
            <input placeholder='Zip code' className='p-2  focus:outline-none w-full border border-slate-600' />
            <input placeholder='Country' className='p-2  focus:outline-none w-full border border-slate-600' />
            </div>
            <input placeholder='Pin Code' className='p-2  focus:outline-none w-full border border-slate-600 mb-10' />
        </form>
    </div>
  )
}

export default Location