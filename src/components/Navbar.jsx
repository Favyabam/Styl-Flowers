import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const Navbar = () => {
  // State for mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  const { cartItems } = useContext(StoreContext); //get cart state

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* 🔹 Navbar Container */}
      <nav className="bg-white border-b-4 border-pink-50 shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {/* 🔹 Brand Logo + Text */}
          <a href="/" className="flex items-center space-x-3 pl-8 rtl:space-x-reverse" >
            <img src={assets.logo} className="h-8" alt="Logo" />
          </a>

          {/* 🔹 Right Section (Cart + Hamburger) */}
          <div className="flex md:order-2 space-x-15 md:space-x-30 rtl:space-x-reverse">
            {/* 🛒 Cart Icon */}
            <div className="relative">
              <a href="/cart" className="text-black-900 hover:text-red-300">
              {/* Redirect to cart page */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 2.25h1.5l1.5 13.5h13.5l1.5-9H6.75M16.5 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-7.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              </svg>
            </a>
            {Object.values(cartItems).some(qty => qty > 0) && (
              <span className="absolute -top-1 -right-2 w-3 h-3 bg-pink-500 rounded-full"></span>
            )}
            </div>
            {/* 🍔 Hamburger Toggle Button (for mobile) */}
            <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-cta" aria-expanded={isOpen} >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                //  Close Icon 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // 🍔 Hamburger Icon
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6" >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* 🔹 Navigation Links */}
          <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"}`} id="navbar-cta" >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="/" className="block py-2 px-3 md:p-0 text-gray-800 rounded-sm md:bg-transparent" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="block py-2 px-3 md:p-0 text-gray-800 rounded-sm hover:bg-gray-100 md:hover:bg-transparent">
                  About
                </a>
              </li>
              <li>
                <a href="#product" className="block py-2 px-3 md:p-0 text-gray-800 rounded-sm hover:bg-gray-100 md:hover:bg-transparent">
                  Product
                </a>
              </li>
              <li>
                <a href="#review" className="block py-2 px-3 md:p-0 text-gray-800 rounded-sm hover:bg-gray-100 md:hover:bg-transparent">
                  Review
                </a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 md:p-0 text-gray-800 rounded-sm hover:bg-gray-100 md:hover:bg-transparent">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
