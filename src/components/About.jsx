import React, { useState } from 'react';
import {FaArrowRight} from 'react-icons/fa';
import {FiSmile} from 'react-icons/fi';
import {LuStars} from 'react-icons/lu';
import {LiaToolsSolid} from 'react-icons/lia';


const About = () => {
  // State to track the active card and its content
  const [activeCard, setActiveCard] = useState('aboutMe');

  // Data for the cards
  const cardData = {
    aboutMe: {
      heading: 'About Me',
      cardSubheading: 'More about who I am',
      descSubheading: "Allow me to introduce myself.",
      description: "I graduated from the Web Development program at Fanshawe College in 2021. Since then I've been creating websites, apps, you name it, in order to improve my skills as a developer. When I'm not working, I like to be in the sun and stay active by playing volleyball or running. I always try to make time to hangout with friends and family, and its rare that I'm not smiling or laughing. I can't live without music, I love reading science-fiction novels, and I'm a bit of a cinephile.",
      icon: <FiSmile />,
    },
    experience: {
      heading: 'Experience',
      cardSubheading: "Projects I've worked on",
      descSubheading: "A brief summary of the projects I've worked on.",
      description: "",
      icon: <LuStars />,
    },
    technologies: {
      heading: 'Technologies',
      cardSubheading: "Languages/Frameworks I'm familiar with",
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
    <section className="bg-shark-500 pt-32">
      <div className="container mx-auto justify-center flex rounded-xl">
        {/* Left container with vertically stacked cards */}
        <div className="w-2/5 rounded-xl">
          {Object.keys(cardData).map((card) => (
            <div
              key={card}
              className={`p-8 rounded-xl ${
                activeCard === card ? 'bg-smoke-700 cursor-default shadow shadow-meadow-700' : 'cursor-pointer hover:bg-smoke-300'
              }`}
              onClick={() => handleCardClick(card)}
            >
                <div className="flex items-center justify-start pb-2">
                    <div className={`text-5xl ${activeCard === card ? 'text-meadow-500' : 'text-[#8c8c8c]'}`}>{cardData[card].icon}</div>
                    <div className="pl-4">
              <h3 className={`text-2xl pb-2 ${activeCard === card ? 'text-meadow-500' : 'text-white'}`}>{cardData[card].heading}</h3>
              <p className={`${activeCard === card ? 'text-white' : 'text-[#8c8c8c]'}`}>{cardData[card].cardSubheading}</p>
              </div>
               <div className={`text-meadow-500 text-xl ml-auto ${activeCard === card ? 'visible' : 'invisible'}`}><FaArrowRight/></div>
              </div>
            </div>
          ))}
        </div>
        {/* Right container with dynamic content */}
        <div className="w-3/5 rounded-r-xl">
            <div className="w-3/4 pl-24 flex h-full flex-col">
                <div className="p-8 rounded-t-xl">
                    <div className="flex items-center pb-2">
                        <div className="bg-smoke-700">
                            <h2 className="text-3xl text-white pb-2">{cardData[activeCard].heading}</h2>
                            <h3 className="text-lg text-white">{cardData[activeCard].descSubheading}</h3>
                        </div>
                    </div>
                </div>
                <div className="p-8 rounded-b-xl h-full">
                    <p className="text-white">{cardData[activeCard].description}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
