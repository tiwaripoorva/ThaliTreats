import React from 'react';
import { Link } from 'react-router-dom';

const Error
 = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
        <svg
          className="w-16 h-16 text-red-500 mx-auto mb-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <h1 className="text-2xl font-bold text-red-600 mb-2">Oops! Something went wrong.</h1>
        <p className="text-lg text-red-500 mb-4">{message || "Please try again later."}</p>
        <Link to="/" className="text-gray-600 underline hover:text-gray-800">
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default Error
;
