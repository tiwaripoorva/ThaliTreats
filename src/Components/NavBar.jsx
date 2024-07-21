import React from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/Slices/SearchSlice';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { logout } = useAuth0();
  return (
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
        <input
          type="search"
          name="search"
          placeholder='Search'
          autoComplete='off'
          onChange={(e)=>{dispatch(setSearch(e.target.value))}}
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 pl-8 w-full lg:w-[20vw]"
        />
        {/* Profile dropdown */}
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <MenuButton className="inline-flex justify-center gap-x-1.5 rounded-full p-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
              <img
                alt="Profile"
                src="/src/assets/account.png"
                className="h-6 w-6 rounded-full"
              />
            </MenuButton>
          </div>

          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <div className="py-1">
              <MenuItem>
                <button className={'block px-4 py-2 text-sm text-gray-700'} onClick={() => navigate("/profile")} >Profile</button>
              </MenuItem>
              <MenuItem>
                <button className={'block px-4 py-2 text-sm text-gray-700'}
                   onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/logout' } })}>
                  Log Out
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </Menu>
      </div>
    </nav>
  );
};

export default NavBar;
