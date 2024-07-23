import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
    <nav className="flex flex-wrap justify-between items-center py-2 px-2 mb-6" style={{ backgroundColor: '#00CED7' }}>
      <div className="flex items-center space-x-2">
        <img
          alt="thalitreats logo"
          src="/src/assets/logo.png"
          className="h-8 w-auto"
        />
        <div>
          <h1 className='text-xl font-bold'>THALITREATS</h1>
          <h3 className='text-sm font-bold text-gray-700'>{new Date().toUTCString().slice(0, 16)}</h3>
        </div>
      </div>
    </nav>
      <main className="container mx-auto px-4 py-1 flex-grow">
        <h2 className="text-3xl font-semibold mb-4">Terms of Service</h2>
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
          <p className="mb-4">
            Welcome to ThaliTreats! These Terms of Service govern your use of our website and services. By using our site, you agree to comply with and be bound by these terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">2. Use of Our Services</h3>
          <p className="mb-4">
            You agree to use our services only for lawful purposes and in a manner that does not infringe on the rights of others.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">3. User Responsibilities</h3>
          <p className="mb-4">
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">4. Limitation of Liability</h3>
          <p className="mb-4">
            We are not liable for any damages or losses arising from your use of our services. Our liability is limited to the fullest extent permitted by law.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">5. Changes to the Terms</h3>
          <p className="mb-4">
            We may update these terms from time to time. The updated terms will be posted on this page, and your continued use of our services constitutes acceptance of the updated terms.
          </p>
        </section>
        
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-2">6. Contact Us</h3>
          <p className="mb-4">
            If you have any questions or concerns about these terms, please contact us at support@thalitreats.com.
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-2 w-full fixed bottom-0">
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
            <a href="/privacy" className="hover:underline mx-1">Privacy Policy</a> | 
            <a href="/terms" className="hover:underline mx-1">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;
