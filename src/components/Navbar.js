import React, { useState } from "react";
import { MdClose, MdMenu, MdRoomPreferences } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const OnclickMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="px-6 py-4 w-full h-16 rounded-lg  bg-purple-100 shadow-md shadow-gray-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        <div className="text-2xl font-bold flex items-center justify-start">
          <Link
            to="/"
            className="px-3 py-1 rounded-md border-[1.5px] border-purple-400 bg-white shadow-md shadow-purple-300 "
          >
            <div className="flex gap-x-1.5 items-center justify-center text-lg text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-purple-600">
              <span className="font-bold">EliteAppMakers</span>
              <div className="h-5 border-r-2 border-primary-600"></div>
              <h1 className="font-semibold">Nela</h1>
            </div>
          </Link>
        </div>
        <ul
          className={`w-full md:w-fit md:flex absolute top-16 inset-x-0 md:static text-purple-700 font-medium bg-purple-50 md:bg-transparent border border-purple-400 md:border-none divide-y divide-purple-400 md:divide-none ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="w-full">
            <Link className="block px-5 py-2" to="/" onClick={handleCloseMenu}>
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block px-5 py-2"
              to="/chatbot"
              onClick={handleCloseMenu}
            >
              ChatBot
            </Link>
          </li>
          <li className="w-full">
            <Link
              className="block px-5 py-2"
              to="/about"
              onClick={handleCloseMenu}
            >
              About
            </Link>
          </li>
        </ul>
        <button
          onClick={OnclickMobileMenu}
          className="relative p-2 md:hidden inline-flex items-center justify-center text-purple-500 rounded-lg border border-purple-500 bg-white"
        >
          {isMobileMenuOpen ? (
            <MdClose className="w-5 h-5" />
          ) : (
            <MdMenu className="w-5 h-5" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

