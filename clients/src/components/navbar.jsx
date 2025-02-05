/* eslint-disable no-unused-vars */
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa"; // Magnifying glass icon
import { BiPlus } from "react-icons/bi"; // Compose icon (pencil)
import { MdApps } from "react-icons/md"; // Google Apps (grid of squares)

function Navbar() {
  return (
    <nav className='flex items-center justify-between bg-white h-16 px-6 shadow-lg'>
      {/* Left Menu */}
      <div className='flex items-center gap-4'>
        <RxHamburgerMenu className='text-xl text-gray-700 cursor-pointer' />
        <img 
          src="https://cdn-icons-png.freepik.com/512/5968/5968534.png" 
          alt="Gmail Logo" 
          className='h-10 w-10'
        />
        <h2 className='text-2xl font-semibold text-gray-800'>Gmail</h2>
      </div>

      {/* Search Area */}
      <div className='flex-1 flex justify-center'>
        <div className='flex items-center border border-gray-300 px-4 py-2 rounded-full w-1/3 focus-within:ring-2 focus-within:ring-blue-400'>
          <FaSearch className='text-xl text-gray-500' />
          <input
            type='text'
            placeholder='Search mail'
            className='w-full bg-transparent outline-none pl-2 text-sm text-gray-800 placeholder-gray-500'
          />
          <HiAdjustmentsHorizontal className='text-xl text-gray-600 cursor-pointer' />
        </div>
      </div>

      {/* Right Menu */}
      <div className='flex items-center gap-6'>
        {/* Compose Button */}
        <button className='flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full'>
          <BiPlus className='text-xl' />
        </button>

        {/* Google Apps Icon */}
        <MdApps className='text-2xl text-gray-700 cursor-pointer' />

        {/* User Profile */}
        <div className='flex items-center gap-4'>
          <h3 className='text-lg text-gray-800'>Ram Chandra</h3>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6T22hjg-27EwUwJlnyIY5uNDm_NoXr3I5ZlqEhH86thsrkbuUc6PrgXykltpo3kKj3HU&usqp=CAU" 
            alt="User Profile" 
            className='h-10 w-10 rounded-full border-2 border-gray-300 cursor-pointer'
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
