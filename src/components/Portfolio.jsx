import React from 'react';
import ajendaImg from '../assets/ajenda-card.png';
import ajendaLandingImg from '../assets/ajenda-landing-card.png';
import streamwakeImg from '../assets/streamwake_card.png';

const Portfolio = () => {
  // Data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'Ajenda',
      description: 'Task management and scheduling app.',
      image: ajendaImg, 
      tools: ['React', 'Tailwind CSS', 'Firebase'],
    },
        {
      id: 3,
      title: 'Streamwake',
      description: 'Discord bot - Watchlist/Player/Activity Tracking.',
      image: streamwakeImg,
      tools: ['React', 'Node.js', 'Express'],
    },
    {
      id: 2,
      title: 'Ajenda Landing Page',
      description: 'Landing page for the Ajenda app.',
      image: ajendaLandingImg,
      tools: ['HTML', 'CSS', 'JavaScript'],
    },

  ];

  return (
    <section id="portfolio" className="bg-smoke-500 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-white mb-8"><span className="italic bg-smoke-100 rounded-tr-lg rounded-bl-lg">Portfolio.</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-smoke-100 rounded-lg overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-1/2 object-fill overflow-hidden p-2 rounded-t-xl" />
              <div className="p-4 flex flex-col">
                <h3 className="text-white text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white mb-4">{item.description}</p>
                <div className="flex flex-wrap">
                  {item.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 text-sm rounded-full py-1 px-2 mr-2 mb-2"
                    >
                      {tool}
                    </span>
                  ))}
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
