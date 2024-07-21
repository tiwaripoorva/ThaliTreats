import React from 'react'
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Slices/CartSlice';
const FoodCard=({id,name,price,desc,handleToast,rating,img}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedDesc = desc.length > 50 ? `${desc.slice(0, 50)}...` : desc;
  const dispatch = useDispatch()
  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-5 ml-4'>
      <img src={img} alt={name} 
        className='w-auto h-[130px] hover:scale-110 cursor-grabbing transition-all ease-in-out overflow-hidden'
      />
      <div className='text-sm justify-between flex'>
        <span>{name}</span>
        <span className='text-green-500'>₹{price}</span>      
      </div>
            <p className='text-sm font-normal'>
        {isExpanded ? desc : truncatedDesc}
        {desc.length > 50 && (
          <span
            onClick={toggleExpand}
            className='text-blue-500 cursor-pointer'
          >
            {isExpanded ? ' Show less' : ' Show more'}
          </span>
        )}
      </p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>{rating}<AiFillStar className='text-yellow-400'/></span> 
            <button className='text-white bg-green-500 hover:bg-green-600 rounded-lg p-1 text-sm'

            onClick={()=>{
              dispatch(addToCart({id,name,price,rating,qty:1,img}));
              handleToast(name)
              }}
            >Add To Cart</button>
        </div>
    </div>
  )
}

export default FoodCard
