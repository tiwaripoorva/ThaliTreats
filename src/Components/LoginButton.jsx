import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <img src="/src/assets/logo.png" alt="ThaliTreats Logo" className="w-32 h-32 mb-6" />
      <h1 className="text-5xl font-bold text-white mb-3">Welcome to ThaliTreats!</h1>
      <p className="text-xl text-white mb-6">Discover the best traditional meals from the comfort of your home.</p>
      <button
        onClick={() => loginWithRedirect({ prompt: "login" })}
        className="px-6 py-3 bg-white text-green-500 rounded-full shadow-md font-semibold hover:bg-gray-100 transition duration-300"
      >
        Log In
      </button>
    </div>
  );
};
export default LoginButton;
