import React from 'react';
import webDevSvg from '../assets/art/webdev.svg';
import softwareSvg from '../assets/art/software.svg';

const Hero = () => {
  return (
    <section className="bg-smoke-500 text-white py-20">
       <div className="container mx-auto flex items-center justify-stretch">
        <div className="w-1/2">
        <h1 className="text-6xl font-bold mb-4">Hi, my name is</h1>
        <h2 className="text-8xl font-bold mb-6"><span className="text-meadow-500">Christopher</span>.</h2>
        <h3 className="text-6xl">I'm a developer from</h3>
        <h3 className="text-6xl mb-8">London, Ontario.</h3>
        <p className="text-xl mb-10 text-gray-400">I'm passionate about creating stylish and intuitive solutions.</p>
        {/* <div className="container mx-auto text-center">
        <a href="#about" className="inline-block bg-transparent border border-meadow-500 text-meadow-500 py-3 px-16 rounded-full text-lg font-medium transition duration-300 hover:bg-meadow-500 hover:text-shark-500">See More</a>
      </div> */}
        <a href="#about" className="bg-transparent border border-meadow-500 text-meadow-500 py-3 px-24 mx-28 rounded-full text-lg font-medium transition duration-300 hover:bg-meadow-500 hover:text-shark-500">See More</a>
        </div>
        <div className="flex-grow">
          {/* <img src={webDevSvg} alt="Web Design Illustration" className="h-72 w-72" /> */}
          <img src={softwareSvg} alt="Software Illustration" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
