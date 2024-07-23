import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className= " py-1 w-full fixed bottom-0" style={{ backgroundColor: '#e0f7fa' }} >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 md:space-x-4 text-xs md:text-sm">
          <div>
            <h3 className="font-bold text-sm">ThaliTreats</h3>
            <p className="text-xs">© {new Date().getFullYear()} ThaliTreats. All rights reserved.</p>
          </div>
          <div className="flex space-x-2 md:space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-sm hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-sm hover:text-blue-400 transition duration-300" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-sm hover:text-pink-500 transition duration-300" />
            </a>
          </div>
        </div>
        <div className="text-xs mt-1 md:mt-0">
          <Link to="/privacy" className="hover:underline mx-1">Privacy Policy</Link> 
          | 
          <Link to="/terms" className="hover:underline mx-1">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
