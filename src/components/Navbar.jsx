import React from 'react';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-shark-500 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-white text-2xl font-bold">Christopher Lynde</div>
        
        <div className="flex justify-center space-x-24">
          <a className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out" href="#about">About Me</a>
          <a className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out" href="#portfolio">Portfolio</a>
          <a className="text-gray-300 hover:text-white font-medium transition duration-300 ease-in-out" href="#contact">Contact</a>
        </div>
        
        <div className="flex items-center space-x-8">
          <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out flex items-center space-x-2" href="https://twitter.com">
            <FaTwitter />
            <span>Twitter</span>
          </a>
          <a className="text-gray-300 hover:text-white transition duration-300 ease-in-out flex items-center space-x-2" href="https://github.com">
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
