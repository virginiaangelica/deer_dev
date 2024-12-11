import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaClipboardList } from "react-icons/fa";
import DeerLogo from '@/assets/DEER.png'; 
import React from "react";
import { Link } from "react-router-dom"; 

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-8 py-1 fixed top-0 left-0 right-0 z-50 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={DeerLogo} alt="Logo Deer Hitam" className="h-20 w-auto" />
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-16">
        <Link to="/dashboard" className="text-black font-medium hover:text-gray-600">
          Beranda
        </Link>
        <Link to="/tips" className="text-black font-medium hover:text-gray-600">
          Tips
        </Link>
        <Link to="/fashion-style" className="text-black font-medium hover:text-gray-600">
          Referensi
        </Link>
      </div>

      {/* Search Bar */}
      <div className="relative flex-1 max-w-sm mx-10">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 px-6 rounded-full border bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <FaSearch className="absolute top-2.5 right-4 text-gray-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-16 mr-14">
        <Link to="/bca2">
          <FaClipboardList className="text-gray-600 hover:text-black cursor-pointer" size={20} />
        </Link>
        <Link to="/favorit">
          <FaHeart className="text-gray-600 hover:text-black cursor-pointer" size={20} />
        </Link>
        <Link to="/keranjang">
          <FaShoppingCart className="text-gray-600 hover:text-black cursor-pointer" size={20} />
        </Link>
        <Link to="/profil">
          <FaUser className="text-gray-600 hover:text-black cursor-pointer" size={20} />
        </Link>
      </div>
    </nav>
  );
}
