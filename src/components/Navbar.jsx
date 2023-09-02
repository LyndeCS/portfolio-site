import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-smoke-500 py-8">
      <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-white text-xl"><span className="text-meadow-500">&lt;</span>Christopher Lynde <span className="text-meadow-500">&#47;&gt;</span></div>
        <div className="space-x-40">
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#about">About</a>
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#portfolio">Portfolio</a>
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#contact">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a className="text-lg text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://twitter.com">
            <FaTwitter />
            <span></span>
          </a>
          <a className="text-lg text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://github.com">
            <FaGithub />
            <span></span>
          </a>
          <a className="text-lg text-meadow-500 hover:text-meadow-700 transition duration-300 ease-in-out" href="mailto:lyndechris@gmail.com">
            <FiMail size={24}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
