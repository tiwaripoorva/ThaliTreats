import React from 'react'
import { IoIosAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart, decrementQty, incrementQty } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';
const CardItem = ({id, name, qty, price,img}) => {
  const dispatch = useDispatch();
  return (
    <div  className='flex shadow-md rounded-lg p-2 mb-3'>
      <MdDelete className='absolute right-7 text-gray-600 cursor-pointer text-xl hover:text-red-500 hover:text-2xl' onClick={()=>{dispatch(removeFromCart({id, img, name , price, qty}));
      toast(`${name} removed`,
      {icon: "👋👋"}
      )
      }} />
      <img src={img} alt="item image" className='w-[50px] h-[50px]' />
    <div>
      <h2 className='text-gray-600 font-bold'>{name}</h2>
    <div className='flex justify-between'>
        <span className='text-green-500 font-bold px-2'>₹{price}</span>
    
    <div className='flex justify-between items-center gap-2 absolute right-7'>
        <LuMinus className='border-gray-600 text-grey-600 border-2 font-bold hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 text-xl translation-all ease-linear cursor-pointer' onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              } />
        <span>{qty}</span>
        <IoIosAdd className='border-gray-600 text-grey-600 border-2 font-bold hover:text-white hover:bg-green-600 hover:border-none rounded-md p-1 text-xl translation-all ease-linear cursor-pointer' 
          onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
        />     
    </div>
    </div>
    </div>
    </div>
  )
}

export default CardItem
