import React from 'react'
import {food_list} from '../assets/frontend_assets/assets'
import ItemCard from './itemcard'
import { useFood } from '../context'

const FoodDisplay = () => {

    const { food } = useFood();

  return (
    <div className='mb-24' >
        <div className='mb-5' ><h1 className='font-semibold text-4xl' >Top dishes near you</h1></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' >
        {
        food_list.map((food_) => {
                if( food_.category === food || food === "All" ){
                    return(
                        <div key={food_._id} className=''>
                            <ItemCard id={food_._id} name={food_.name} price={food_.price} img={food_.image} des={food_.description} cat={food_.category} />
                        </div>
                    )               
                }
            })
        }    
        </div> 
    </div>
  )
}

export default FoodDisplay
