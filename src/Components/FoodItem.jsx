import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../Data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
const FoodItem = () => {
  const category = useSelector((state)=>state.category.category)
  const search = useSelector((state)=>state.search.search)
  console.log(search);
  const handleToast = (name) => toast.success(`${name} added to cart`);
  return (
    <>
    <Toaster  position = "top-center" reverseOrder={false}/>
    <div className='flex flex-wrap gap-10 justify-center lg:justify-start my-10'>
              {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === food.category &&
              food.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}

    </div>
  </>
  )
}

export default FoodItem
