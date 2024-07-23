import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
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
      <main className="container mx-auto px-3 py-1">
        <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
        <p className="mb-4">
          At ThaliTreats, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose your personal information.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">1. Information We Collect</h3>
        <p className="mb-4">
          We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us. This may include your name, email address, phone number, and payment details.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">2. How We Use Your Information</h3>
        <p className="mb-4">
          We use your information to process transactions, improve our services, and communicate with you. We may also use your information to send you promotional materials or updates, with your consent.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">3. Information Sharing</h3>
        <p className="mb-4">
          We do not sell or rent your personal information to third parties. We may share your information with service providers who help us operate our business, but only to the extent necessary for them to perform their services.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">4. Your Rights</h3>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at [your contact information].
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">5. Changes to This Policy</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">6. Contact Us</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at [your contact information].
        </p>
      </main>
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} ThaliTreats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
