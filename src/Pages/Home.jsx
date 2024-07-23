import React from 'react';
import NavBar from '../Components/NavBar';
import CateogeryMenu from '../Components/CateogeryMenu';
import FoodItem from '../Components/FoodItem';
import Cart from '../Components/Cart';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <NavBar />
      </header>
      <main className="flex-grow">
        <section className="bg-gray-100 py-0">
          <CateogeryMenu />
        </section>
        <section className="py-0">
          <FoodItem />
        </section>
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
