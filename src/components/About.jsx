import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import headshot from '../assets/stock_selfie.png';

const AboutMe = () => {
  return (
    <section id="about" className="bg-smoke-500 py-24 min-h-screen">
      <div className="container mx-auto flex justify-start">
        {/* Left section with image and social links */}
        <div className="w-1/4">
          {/* Your profile image */}
          <img
            src={headshot}
            alt="Your Name"
            className="rounded w-48 h-64 object-cover scale-x-[-1]"
          />

          {/* Social media links */}
  <div className="mt-8 flex flex-col space-y-4 text-sm">
    <div className="flex items-center">
      <FaGithub size={16} className="text-gray-500"/>
      <a href="https://github.com/LyndeCS" className="text-white ml-4 hover:text-meadow-500">Follow on GitHub</a>
    </div>
    <div className="flex items-center">
      <FaLinkedin size={16} className="text-gray-500"/>
      <a href="https://www.linkedin.com/in/chrislynde/" className="text-white ml-4 hover:text-meadow-500">Follow on LinkedIn</a>
    </div>
    <div className="flex items-center">
      <FaTwitter size={16} className="text-gray-500"/>
      <a href="https://twitter.com/lynde_chris" className="text-white ml-4 hover:text-meadow-500">Follow on Twitter</a>
    </div>
    <hr className="w-1/2 bg-gray-500 h-[1px] border-none opacity-50"></hr>
    <div className="flex items-center">
      <FaEnvelope size={16} className="text-gray-500"/>
      <a href="mailto:lyndechris@gmail.com" className="text-white ml-4 hover:text-meadow-500">lyndechris@gmail.com</a>
    </div>
  </div>
</div>

        {/* Right section with your information */}
        <div className="w-2/4">
          <h1 className="text-4xl font-bold text-white mb-6">My name is <span className="text-meadow-500">Christopher Lynde</span>.</h1>
          <h1 className="text-4xl font-bold text-white mb-12">I'm a full-stack developer with a passion for creating <span className="underline italic decoration-meadow-500">stylish and intuitive interfaces.</span></h1>
          <div className="text-white mb-6">
            <p className="text-xl text-justify">
              I believe in respecting the user. <span className="italic decoration-meadow-500 bg-shark-300">Fewer clicks, faster results.</span> In order to deliver on this principle, I'm driven to discover all that is possible of the tools at my disposal. As a result, and in addition to being naturally curious, I am excited to engage with new technologies and take every opportunity to synthesize new knowledge in order to build the best product imaginable.
            </p>
          </div>

          <div className="text-white mb-6">
            <p className="text-xl text-justify">
              I graduated from the Web Development program at Fanshawe College in 2021, where I learned the foundations of HTML5, CSS3, JavaScript (ES6), LAMP (Linux, Apache, MySQL, PHP), and CMS (WordPress).
              Since then, I've added React (up to v18), TypeScript, Firebase DB (NoSQL), and Node to my repertoire, as well as Bootstrap, MUI, and Tailwind for styling.
            </p>
          </div>

          <div className="text-white mb-6">
            <p className="text-xl text-justify">
              I spend most of my time creating websites, apps, discord bots, you name it, in order to improve my skills as a developer.
              I gravitate towards building interfaces - I love finding ways to make interactions as intuitive and accessible as possible while maintaining a sleek and thematic style.
            </p>
          </div>

          <div className="text-white">
            <p className="text-xl text-justify">
              When I'm not working, I like to be in the sun and stay active by playing volleyball or running.
              I always try to make time to hangout with friends and family, and its rare that I'm not smiling or laughing.
              I can't live without music, I love reading science-fiction novels, and I'm a bit of a cinephile.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
