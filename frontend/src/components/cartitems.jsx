import React from 'react'
import { useFood } from '../context'
import { assets } from '../assets/frontend_assets/assets';

const CartItems = () => {

    const { food_list , cartItems , removeFromCart } = useFood();
    console.log(cartItems);

    const handleClick = (id) => {
        removeFromCart(id);
    }

  return (
    <div className='pt-10 mb-16' >
        <div className='grid grid-cols-6 mb-10' >
            <div>Items</div>
            <div>Title</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div>Remove</div>
        </div>
        <div className='border border-slate-200 w-full mb-5' ></div>
        {
            food_list.map( (food ) => {
                if( cartItems[food._id] > 0 ){
                    return (
                        <div>
                            <div className='grid grid-cols-6 mb-5' >
                                <img className='h-12 w-16'  src={food.image} />
                                <div>{food.name}</div>
                                <div>${food.price}</div>
                                <div>{cartItems[food._id]}</div>
                                <div>${food.price*cartItems[food._id]}</div>
                                <div className='h-3 w-3' onClick={() => handleClick(food._id)} ><img src={assets.cross_icon} /></div>
                            </div>
                            <div className='border border-slate-200 w-full mb-5' ></div>
                        </div>
                    )
                }    
            })
        }
    </div>
  )
}

export default CartItems