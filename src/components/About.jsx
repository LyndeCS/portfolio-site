import React, { useState } from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FiSmile} from 'react-icons/fi';
import {LuStars} from 'react-icons/lu';
import {LiaToolsSolid} from 'react-icons/lia';
import yourImage from '../assets/stock_selfie.png'; // Adjust the path and file format as needed


const About = () => {
  // State to track the active card and its content
  const [activeCard, setActiveCard] = useState('aboutMe');

  // Data for the cards
  const cardData = {
    aboutMe: {
      cardHeading: 'About Me',
      cardSubheading: 'More about who I am',
      descHeading: "Hi, I'm Chris.",
      descSubheading: "Personal Life:",
      description: "I graduated from the Web Development program at Fanshawe College in 2021. Since then I've been creating websites, apps, you name it, in order to improve my skills as a developer. When I'm not working, I like to be in the sun and stay active by playing volleyball or running. I always try to make time to hangout with friends and family, and its rare that I'm not smiling or laughing. I can't live without music, I love reading science-fiction novels, and I'm a bit of a cinephile.",
      icon: <FiSmile />,
    },
    experience: {
      cardHeading: 'Experience',
      cardSubheading: "Projects I've worked on",
      descHeading: '',
      descSubheading: "A brief summary of the projects I've worked on.",
      description: "",
      icon: <LuStars />,
    },
    technologies: {
      cardHeading: 'Skills',
      cardSubheading: "Languages/Frameworks I'm familiar with",
      descHeading: '',
      descSubheading: "The tools I have experience with and feel comfortable using.",
      description: "",
      icon: <LiaToolsSolid />,
    },
  };

  // Function to handle card clicks
  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  return (
    <section className="bg-smoke-500 pt-32 min-h-screen">
      <div className="container mx-auto flex">

        {/* Left container with vertically stacked cards */}
        <div className="flex flex-col w-1/4 space-y-8 justify-between">
          {Object.keys(cardData).map((card) => (
            <div
              key={card}
              className={`flex-item rounded-md p-4 ${
                activeCard === card ? 'bg-smoke-500 cursor-default border border-meadow-500' : 'cursor-pointer bg-smoke-300 hover:bg-smoke-300'
              }`}
              onClick={() => handleCardClick(card)}
            >
                <div className="flex items-center justify-start pb-2">
                    <div className={`text-5xl ${activeCard === card ? 'text-meadow-500' : 'text-[#8c8c8c]'}`}>{cardData[card].icon}</div>
                    <div className="pl-4">
              <h3 className={`text-2xl pb-2 ${activeCard === card ? 'text-meadow-500' : 'text-white'}`}>{cardData[card].cardHeading}</h3>
              <p className={`${activeCard === card ? 'text-white' : 'text-[#8c8c8c]'}`}>{cardData[card].cardSubheading}</p>
              </div>
               <div className={`text-meadow-500 text-xl ml-auto ${activeCard === card ? 'visible' : 'invisible'}`}><FaArrowRight/></div>
              </div>
            </div>
          ))}
        </div>

        {/* Right container with dynamic content */}
        <div className="w-3/4">
            <div className="flex h-full flex-col">
                <div>
                    <div className="flex items-center">
                        <div className="w-3/4 pl-32 pr-20">
                            <h2 className="text-6xl text-white pb-12">{cardData[activeCard].descHeading}</h2>
                            <h3 className="text-4xl text-white pb-12">{cardData[activeCard].descSubheading}</h3>
                            <p className="text-white text-2xl justify-content">{cardData[activeCard].description}</p>
                        </div>
                        <div className="w-1/4">
                        <img src={yourImage} alt="Your Image"  />
                        </div>
                    </div>
                </div>
                <div className="rounded-b-xl h-full text-justify">
                    
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
