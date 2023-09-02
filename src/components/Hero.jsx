import React from 'react';
import softwareSvg from '../assets/art/software.svg';

const Hero = () => {
  return (
    <section className="bg-smoke-500 text-white min-h-screen pt-40">
       <div className="container mx-auto flex items-center justify-stretch">
        <div className="w-1/2">
        <h1 className="text-6xl mb-6">Hi, my name is</h1>
        <h2 className="text-8xl font-bold mb-6"><span className="text-meadow-500">Christopher</span>.</h2>
        <h3 className="text-6xl mb-8">I'm a web developer<br/> from London, Ontario.</h3>
        <p className="text-2xl mb-10 text-slate-400">I'm passionate about creating stylish and intuitive solutions.</p>
          <a href="#portfolio" className="bg-transparent border border-meadow-500 text-white py-3 px-12 rounded text-2xl transition-all duration-700 hover:bg-meadow-100 hover:bg-opacity-5">See My Work</a>
        </div>
        <div className="flex-grow">
          <img src={softwareSvg} alt="Software Illustration" className="w-full h-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
