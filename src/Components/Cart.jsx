import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import CardItem from './CardItem';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const [activeCart, setActiveCart] = useState(false);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalprice = cartItems.reduce((totalprice, item) => totalprice + item.qty * item.price, 0);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/success", { state: { cartItems } });
    } else {
      toast.error("Oops, there's nothing in the cart to order.");
    }
  };

  return (
    <>
      <div className={`fixed top-0 h-full right-0 w-full p-5 lg:w-[24vw] bg-white ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}>
        <div className='flex justify-between my-5'>
          <span className='text-xl font-bold font-grey-800'>My Order(s)</span>
          <span>
            <IoMdClose onClick={() => { setActiveCart(!activeCart); }} className='border-2 border-gray-600 font-bold p-1 text-xl rounded-md text-gray-600 hover:text-red-300 hover:border-red-300 cursor-pointer' />
          </span>
        </div>
        {cartItems.length > 0 ? cartItems.map((food) => {
          return <CardItem key={food.id} id={food.id} name={food.name} price={food.price} img={food.img} qty={food.qty} />
        }) : <h2 className='text-2xl font-semibold text-red-500 text-center'>Your Cart is Empty</h2>}

        <div className='absolute bottom-0 '>
          <h3 className='text-gray-500 font-semibold'>
            Items: {totalQty}
          </h3>
          <h3 className='text-gray-500 font-semibold'>
            Total Amount: {totalprice}
          </h3>
          <hr className='w-[90vw] lg:w-[180-vw] my-2' />
          <button onClick={handleCheckout} className='rounded-md border-gray-400 bg-green-500 hover:bg-green-600 lg:w-[18vw] text-md my-2 p-2 font-bold text-white mb-5'>Checkout</button>
        </div>
      </div>
      {!activeCart && (
        <FaShoppingCart
          onClick={() => { setActiveCart(!activeCart); }}
          className={`rounded-full lg:bg-white lg:shadow-md text-5xl fixed lg:top-20 top-12 right-6 mt-2 p-3 cursor-pointer ${totalQty > 0 && "animate-bounce delay-500 transition-all"}`}
        />
      )}
    </>
  );
};

export default Cart;
