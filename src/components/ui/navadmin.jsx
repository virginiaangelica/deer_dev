import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavAdmin = () => {
  const navigate = useNavigate(); 

  const handleLogout = () => {
    navigate("/login-admin"); 
  };

  return (
    <nav className="flex items-center justify-between bg-gray-200 px-6 py-3 shadow-lg">
      {/* Logo */}
      <div className="text-xl font-bold">DEER</div>
      
      {/* Search Bar */}
      <div className="flex items-center bg-gray-300 px-4 py-2 rounded-full">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full"
        />
        <button className="ml-2">
          {/* Updated Search Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-gray-600"
          >
            <path d="M10 2a8 8 0 105.292 14.708l4 4a1 1 0 001.415-1.415l-4-4A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z" />
          </svg>
        </button>
      </div>
      
      {/* Admin Info and Logout */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm font-medium">Selvia</p>
          <p className="text-xs text-gray-500">Admin Deer</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 17l-4-4m0 0l-4 4m4-4v6"
            />
          </svg>
        </div>
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={handleLogout} 
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavAdmin;
