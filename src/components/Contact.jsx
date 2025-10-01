import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div id="contact" className="bg-white">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold bg-pink-100 text-center mb-12 w-full max-w-[69rem] py-4 mt-8">
          <span className="text-pink-500">Contact</span> <span className="text-gray-800">Us</span>
        </h1>
      </div>

      <div className="flex flex-wrap items-center justify-center px-8 py-16">

        {/* Left side */}
        <div className="w-full md:w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-8">

          <form className="space-y-4 mb-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </form>

          <form className="space-y-4 mb-4">
            <input type="email" placeholder="email@mail.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </form>

          <form className="space-y-4 mb-4">
            <input type="number" placeholder="phone-number" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
          </form>

            <textarea placeholder="Message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500" />
            <button type="submit" className="bg-pink-500 text-white py-3 px-6 cursor-pointer rounded-full mt-4 w-50 md:w-1/2 block mx-auto font-semibold hover:bg-pink-600 transition">
              Send Message
            </button>

        </div>

        {/* Right side */}
        <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img src={assets.contact} alt="Contact" className="max-w-sm md:max-w-md" />
        </div>

      </div>
    </div>
  );
};

export default Contact;
