import React, { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const OnclickMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };


  return (
    <div className="px-6 py-4 w-full h-16 rounded-lg text-purple-500 bg-purple-100 shadow-md shadow-gray-300">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between gap-4">
        <div className="text-2xl font-bold flex items-center justify-start">
          <Link
            to="https://nela.eliteappmakers.in/index"
            className="px-3 py-1 rounded-md bg-white border-[1.5px] border-purple-400 shadow-md shadow-purple-300 "
          >
            <div className="flex gap-x-1.5 items-center justify-center text-lg text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-purple-600">
              <span className="font-bold">EliteAppMakers</span>
              <div className="h-5 border-r-2 border-primary-600"></div>
              <h1 className="font-semibold">Nela</h1>
            </div>
          </Link>
        </div>
        <div className="text-lg flex text-purple-500 items-center justify-end gap-x-1 sm:gap-x-3">
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
          <div
            className={`w-40 md:w-full md:block ${
              isMobileMenuOpen
                ? "absolute top-14 right-6 rounded-lg border border-purple-400 divide divide-purple-400 bg-purple-50 "
                : "hidden"
            } `}
          >
            <ul className="flex flex-col font-medium rounded-lg md:flex-row md:space-x-6 divide-y divide-purple-400 md:divide-none">
              <li>
                <Link className="px-2" to="/" onClick={handleCloseMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 rounded-md"
                  to="/chatbotpage"
                  onClick={handleCloseMenu}
                >
                  ChatBot
                </Link>
              </li>
              <li>
                <Link
                  className="px-2 rounded-md"
                  to="/about"
                  onClick={handleCloseMenu}
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
