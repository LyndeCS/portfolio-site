import React from 'react';
import webDevSvg from '../assets/art/webdev.svg';
import softwareSvg from '../assets/art/software.svg';

const Hero = () => {
  return (
    <section className="bg-smoke-500 text-white py-20">
       <div className="container mx-auto flex items-center justify-stretch">
        <div className="w-1/2">
        <h1 className="text-6xl mb-4">Hi, my name is</h1>
        <h2 className="text-8xl font-bold mb-6"><span className="text-meadow-500">Christopher</span>.</h2>
        <h3 className="text-6xl mb-8">I'm a web developer from London, Ontario.</h3>
        <p className="text-xl mb-10 text-gray-400">I'm passionate about creating stylish and intuitive solutions.</p>
        <div className="container mx-auto text-center mt-6 md:mt-0">
         <div className="flex justify-center md:justify-start space-x-4">
          <a href="#about" className="flex-grow bg-transparent border border-meadow-500 text-white py-3 px-6 rounded text-2xl transition-all duration-500 hover:flex-grow-[4]">About Me</a>
          <a href="#portfolio" className="flex-grow bg-transparent border border-meadow-500 text-white py-3 px-6 rounded text-2xl transition-all duration-500 hover:flex-grow-[4]">See My Work</a>
         </div>
        </div>
        </div>
        <div className="flex-grow">
          {/* <img src={webDevSvg} alt="Web Dev Illustration" className="w-full h-full" /> */}
          <img src={softwareSvg} alt="Software Illustration" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
