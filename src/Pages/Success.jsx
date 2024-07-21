import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaCheckCircle } from "react-icons/fa";
import { PacmanLoader } from 'react-spinners';

const Success = () => {
  const { state } = useLocation();
  const { cartItems } = state || { cartItems: [] };
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <PacmanLoader color="#10db53" />
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <div className="text-center">
            <FaCheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3 mt-3" />
            <h1 className="text-3xl font-bold text-green-600 mb-3">Order Successful</h1>
            <h3 className="text-lg text-green-500 mb-1">Your delicious meal is on its way!</h3>
            <p className="text-gray-700 mt-3">Thank you for ordering from ThaliTreats! You will receive a confirmation email shortly.</p>
          </div>

          {cartItems.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-200 p-4 rounded-lg shadow-md text-center">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-48 h-48 object-cover rounded-full mx-auto mb-2"
                  />
                  <p className="text-lg font-semibold">{item.name}</p>
                </div>
              ))}
            </div>
          )}
          <div className="text-center mt-8">
            <button onClick={() => navigate("/home")} className="px-6 py-3 bg-green-500 text-white rounded-full mb-4 shadow-md hover:bg-green-600 transition duration-300">
              Go to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Success;
