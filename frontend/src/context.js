import React, { createContext, useContext, useEffect, useState } from 'react';
import {food_list} from './assets/frontend_assets/assets'

const FoodContext = createContext();


export const FoodProvider = ({ children }) => {
  const [food, setFood] = useState("All");
  const [ cartItems, setCartItems ] = useState({});
  const [total , setTotal ] = useState(0);
  const [ show , setShow ] = useState(false);

  const addToCart = (id) => {
    if( !cartItems[id]) setCartItems((prev) => ({...prev,[id]:1}));
    else setCartItems((prev) => ({...prev,[id]:prev[id]+1}))
  }

  const removeFromCart = (id) => {
    setCartItems( (prev) => ({...prev,[id]:prev[id]-1}))
  }


  const subTotal = () => {
      let amount = 0 ; 
      food_list.map( (food) => {
        if( cartItems[food._id] > 0 ) amount += food.price*cartItems[food._id];
      }); 
      
      setTotal(amount);
  }

  const doCheck = () => {
      if( total === 0 ) setShow(false);
      else setShow(true);
  }

  useEffect( () => {
    subTotal();
    doCheck();
  }, [cartItems,total] );

  return (
    <FoodContext.Provider value={{ food, setFood, addToCart, removeFromCart , cartItems , food_list , total , show }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFood = () => useContext(FoodContext);
