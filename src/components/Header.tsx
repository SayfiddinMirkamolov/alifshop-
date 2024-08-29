import React from "react";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png" // Bu yerdagi src'ni logotip fayliga mos ravishda almashtiring
              alt="alif shop"
              className="h-8 mr-4"
            />
            <h1 className="font-bold text-lg">alif shop</h1>
          </div>

          {/* Category Button */}
          <button className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-md">
            Tovarlar katalogi
          </button>

          {/* Search Bar */}
          <div className="ml-6 flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Tovarlarni izlash"
              className="px-4 py-2 focus:outline-none"
            />
            <button className="bg-yellow-400 px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l4-4-4-4m0 0l4 4-4 4m6 8V8h4"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
          <div className="flex items-center mr-6">
            <FaShoppingCart className="text-xl mr-2" />
            <span>Savat</span>
          </div>
          <div className="flex items-center mr-6">
            <FaHeart className="text-xl mr-2" />
            <span>Saralanganlar</span>
          </div>
          <button className="border px-4 py-2 rounded-md mr-6">Kirish</button>
          <div className="flex items-center">
            <span className="mr-2">РУС / UZB</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto flex justify-between text-sm text-gray-500">
          <span>Smartfonlar va gadjetlar</span>
          <span>Noutbuklar, kompyuterlar</span>
          <span>TV va proektorlar</span>
          <span>Audiotexnikalar</span>
          <span>Transport</span>
          <span>Uy uchun texnika</span>
          <span>Oshxona uchun texnika</span>
          <span>Go'zallik va sog'</span>
          <span className="text-black">Yana</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
