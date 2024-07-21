import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Success from './Pages/Success'
import Error from './Pages/Error'
import { Toaster } from 'react-hot-toast'
import LoginButton from './Components/LoginButton'
import Profile from './Pages/Profile'
import LogoutPage from './Pages/LogoutPage'
import { Auth0Provider } from '@auth0/auth0-react'
const App = () => {
  return (
  <Auth0Provider
    domain="dev-7f3fq00dsjnuvmjq.us.auth0.com"
    clientId="WMKvGcHQk6abPur4cnqWHI4G0hVf52Vy"
    authorizationParams={{
      redirect_uri: window.location.origin + '/home' 
    }}
  >
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path='/logout' element={<LogoutPage/>} />
          <Route path='/' element={<LoginButton/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/success' element={<Success />} />
          <Route path='/*' element={<Error />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
</Auth0Provider>
  )
}

export default App
