// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-xl font-semibold">Christopher Lynde</div>
        <div className="flex space-x-6">
          <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out" href="#hero">Home</a>
          <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out" href="#portfolio">Portfolio</a>
          <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
