import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-smoke-500 py-8">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl"><span className="text-meadow-500">&lt;</span>Christopher Lynde <span className="text-meadow-500">&#47;&gt;</span></div>
        <div className="space-x-40">
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#about">About</a>
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#portfolio">Portfolio</a>
          <a className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out" href="#contact">Contact</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <a target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://www.linkedin.com/in/chrislynde/">
            <FaLinkedin />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://twitter.com/lynde_chris">
            <FaTwitter />
          </a>
          <a target="_blank" rel="noopener noreferrer" className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2" href="https://github.com/LyndeCS">
            <FaGithub />
          </a>
          <a className="text-xl text-meadow-500 hover:text-meadow-700 transition duration-300 ease-in-out" href="mailto:lyndechris@gmail.com">
            <FiMail />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
