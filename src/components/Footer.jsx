import React from "react";

const Footer = () => {
  return (
    <div className="bg-white py-12 px-18">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-700">
        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-500">Home </a></li>
            <li><a href="#" className="hover:text-pink-500">About</a></li>
            <li><a href="#" className="hover:text-pink-500">Product</a> </li>
            <li><a href="#" className="hover:text-pink-500"> Review</a></li>
            <li><a href="#" className="hover:text-pink-500"> Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Extra Link</h2>
          <ul className="space-y-2">
            <li><a href="/cart" className="hover:text-pink-500">My Order</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Locations</h2>
          <ul className="space-y-2">
            <li className="hover:text-pink-500">Abuja</li>
            <li className="hover:text-pink-500">Lagos</li>
            <li className="hover:text-pink-500">Calabar</li>
            <li className="hover:text-pink-500">Kaduna</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4 text-gray-900">Contact Info</h2>
          <ul className="space-y-2">
            <li className="hover:text-pink-500">+234-90-419-894-12</li>
            <li className="hover:text-pink-500">ghost@gmail.com</li>
            <li className="hover:text-pink-500">Abuja, Nigeria – 900109</li>
          </ul>
        </div>
      </div>

      <div className="mt-12 border-t pt-6 text-center text-gray-500 text-xl">
        <span className="text-pink-500"> 𝒢𝒽𝑜𝓈𝓉 </span> © 2025 | all rights reserved
      </div>
    </div>
  );
};

export default Footer;
