import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate()
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading ...</div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col h-screen overflow-hidden">
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
      <div className="flex items-center space-x-2 mt-2 lg:mt-0">

        {/* Profile dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-full p-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              <img
                alt="Profile"
                src={user.picture}
                className="h-8 w-8 rounded-full"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <button className={'block px-4 py-2 text-sm text-gray-700'}
                   onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/logout' } })}>
                  Log Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
                <button
        className="relative rounded-full bg-gray-800 px-6 py-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 pl-8 w-full lg:w-[14vw]"
        onClick={() => navigate("/home")}
      >
        Back to Home
      </button>
      </div>
    </nav>
        <div className="flex flex-grow items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={user.picture}
              alt={user.name}
              className="rounded-full w-24 h-24 mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};

export default Profile;
