import React from 'react';
import { FaTwitter, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-shark-500 py-4">
      <div className="container mx-auto flex justify-end items-center px-4">
       <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <div className="text-white text-2xl font-bold"><span className="text-meadow-500">&lt;</span>Christopher Lynde <span className="text-meadow-500">&#47;&gt;</span></div>
        </div>
        
        <div className="ml-auto mr-16 space-x-16">
          <a className="text-white hover:text-meadow-500 text-lg transition duration-300 ease-in-out" href="#about">About Me</a>
          <a className="text-white hover:text-meadow-500 text-lg transition duration-300 ease-in-out" href="#portfolio">Portfolio</a>
          <a className="text-white hover:text-meadow-500 text-lg transition duration-300 ease-in-out" href="#contact">Contact</a>
        </div>
        
        <div className="flex items-center space-x-8">
          <a className="text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://twitter.com">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a className="text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://github.com">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a className="text-meadow-500 hover:text-meadow-700 transition duration-300 ease-in-out" href="mailto:lyndechris@gmail.com">
            <FiMail size={24}/>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
