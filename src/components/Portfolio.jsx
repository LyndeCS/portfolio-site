import React from 'react';
import ajendaImg from '../assets/a_card.png';
import ajendaLandingImg from '../assets/alp_card.png';
import streamwakeImg from '../assets/sw_card.png';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
  // Data for portfolio items
  const projects = [
    {
      id: 1,
      title: 'Ajenda - Landing Page',
      description: 'Landing page to serve as the value proposition to use the Ajenda app.',
      image: ajendaLandingImg,
      tools: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://ajenda-landing.netlify.app/',
      git: 'https://github.com/LyndeCS/ajenda',
    },
    {
      id: 2,
      title: 'Ajenda - Task Manager/Scheduler',
      description: 'Task management and scheduling app. Create tasks to be accompished, then schedule them in the calendar to stay organized.',
      image: ajendaImg, 
      tools: ['React', 'Firebase', 'MUI'],
      link: 'https://ajenda.web.app/',
      git: 'https://github.com/LyndeCS/ajenda-landing',
    },
    {
      id: 3,
      title: 'Streamwake - Discord bot',
      description: 'Suggest shows to watch, admin selects watchlist from recently watched shows and suggested shows. User viewing activity is logged to keep track of episodes watched.',
      image: streamwakeImg,
      tools: ['JavaScript', 'Node.js', 'Discord.js'],
      link: 'https://github.com/LyndeCS/Streamwake',
      git: 'https://github.com/LyndeCS/Streamwake',
    },

  ];

  return (
    <section id="portfolio" className="bg-smoke-500 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white mb-8"></h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
          {projects.map((item) => (
            <div key={item.id} className="bg-smoke-100 rounded-lg h-[30rem] flex flex-col p-2">
              <a href={item.link} target="_blank" rel="noopener noreferrer"><img src={item.image} alt={item.title} className="rounded-t-lg" /></a>
              <div className="flex flex-col justify-between h-2/3 pt-2 px-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer"><h3 className="text-white text-2xl my-2 hover:underline">{item.title}</h3></a>
                <p className="text-gray-400 mb-auto">{item.description}</p>
                <div className="flex flex-wrap">
                  {item.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-sm font-medium rounded-full py-1 px-2 mr-2 mb-2"
                    >
                      {tool}
                    </span>
                  ))}
                  <a href={item.git} target="_blank" rel="noopener noreferrer" className="text-sm ml-auto text-gray-200 flex flex-row gap-x-2 items-center hover:underline">GitHub<FaGithub size={24}/></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
