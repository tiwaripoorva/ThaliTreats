import React from 'react'
import NavBar from '../Components/NavBar'
import CateogeryMenu from '../Components/CateogeryMenu'
import FoodItem from '../Components/FoodItem'
import Cart from '../Components/Cart'

const Home = () => {
  return<>
    <NavBar/>
    <CateogeryMenu/>
    <FoodItem/>
    <Cart/>
  </> 
}

export default Home
