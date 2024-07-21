import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">
             <div className="text-xl">Loading ...</div>
           </div>;
  }

  return (
    isAuthenticated && (
      <div className="flex items-center justify-center h-screen bg-gray-100">
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
    )
  );
};

export default Profile;
