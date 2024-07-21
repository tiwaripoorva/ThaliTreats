import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        You have been successfully logged out
      </h1>
      <button
        className="px-6 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        onClick={handleLoginRedirect}
      >
        Login
      </button>
    </div>
  );
};

export default LogoutPage;
