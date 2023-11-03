import React from "react";
import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaEnvelope,
	FaReact,
	FaNode,
	FaHtml5,
	FaCss3,
	FaJs,
	FaBootstrap,
	FaLinux,
	FaPhp,
	FaWordpress,
} from "react-icons/fa";
import {
	SiMysql,
	SiTypescript,
	SiFirebase,
	SiMui,
	SiTailwindcss,
	SiJavascript,
} from "react-icons/si";
import headshot from "../assets/stock_selfie.png";

const techIcons = [
	{ icon: <FaReact />, text: "React" },
	{ icon: <FaNode />, text: "Node.js" },
	{ icon: <SiJavascript />, text: "JavaScript" },
	{ icon: <SiTypescript />, text: "TypeScript" },
	{ icon: <FaHtml5 />, text: "HTML5" },
	{ icon: <FaCss3 />, text: "CSS3" },
	{ icon: <FaPhp />, text: "PHP" },
	{ icon: <SiMysql />, text: "MySQL" },
	{ icon: <SiFirebase />, text: "Firebase" },
	{ icon: <SiTailwindcss />, text: "Tailwind" },
	{ icon: <FaLinux />, text: "Linux" },
	{ icon: <FaWordpress />, text: "WordPress" },
	{ icon: <SiMui />, text: "MUI" },
	{ icon: <FaBootstrap />, text: "Bootstrap" },
];

const About = () => {
	return (
		<section id="about" className="bg-smoke-500 pt-4 md:pt-12">
			{/* SECTION HEADING */}
			<div className="mx-auto container px-4 md:px-8 xl:px-0">
				<h2 className="text-lg md:text-2xl text-white mb-8 md:mb-16 italic">
					<span className="">
						<span className="text-meadow-500">&lt;</span>About{" "}
						<span className="text-meadow-500">&#47;&gt;</span>
					</span>
				</h2>
			</div>

			<div className="container mx-auto flex justify-start px-4 md:px-8 xl:px-0">
				{/* Left section with image and social links */}
				<div className="w-1/4 h-min flex-shrink">
					{/* Profile image */}
					<img
						src={headshot}
						alt="Your Name"
						className="rounded w-24 md:w-48 h-32 md:h-64 object-cover scale-x-[-1]"
					/>

					{/* Social media links */}
					<div className="mt-4 md:mt-8 flex flex-col space-y-2 md:space-y-4 text-sm">
						<div className="flex items-center">
							<FaGithub size={16} className="text-gray-500" />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/LyndeCS"
								className="text-white ml-4 hover:text-meadow-500"
							>
								<span className="hidden md:inline-block">Follow on</span> GitHub
							</a>
						</div>
						<div className="flex items-center">
							<FaLinkedin size={16} className="text-gray-500" />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/chrislynde/"
								className="text-white ml-4 hover:text-meadow-500"
							>
								<span className="hidden md:inline-block">Follow on</span>{" "}
								LinkedIn
							</a>
						</div>
						<div className="flex items-center">
							<FaTwitter size={16} className="text-gray-500" />
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://twitter.com/lynde_chris"
								className="text-white ml-4 hover:text-meadow-500"
							>
								<span className="hidden md:inline-block">Follow on</span>{" "}
								Twitter
							</a>
						</div>

						{/* DIVIDER */}
						<hr className="w-[75px] xxs:w-[90px] md:w-[175px] lg:w-[190px] bg-gray-500 h-[1px] border-none opacity-50"></hr>

						<div className="flex items-center">
							<FaEnvelope size={16} className="text-gray-500" />
							<a
								href="mailto:lyndechris@gmail.com"
								className="text-white ml-4 hover:text-meadow-500"
							>
								<span className="hidden md:inline-block">
									lyndechris@gmail.com
								</span>
								<span className="inline-block md:hidden">Email</span>
							</a>
						</div>
					</div>
				</div>

				{/* Middle section with paragraphs */}
				<div className="flex-grow lg:w-3/5 xl:w-2/4 pl-4 md:pl-8 lg:pl-0">
					{/* HEADING/SUBHEADING */}
					<div className="flex flex-col h-full md:h-min text-2xl xs:text-3xl sm:text-4xl sm:pl-4 md:pl-0 mt-[-6px]">
						<h1 className="font-bold text-white mb-6">
							Hi, my name is <br className="lg:hidden" />
							<span className="text-meadow-500">Christopher Lynde</span>.
						</h1>
						<h1 className="font-bold text-white md:mb-12 text-xl xxs:text-2xl xs:text-3xl sm:text-4xl">
							I'm a full-stack developer with a passion for creating{" "}
							<span className="underline italic decoration-meadow-500">
								stylish and intuitive interfaces.
							</span>
						</h1>
					</div>

					{/* PARAGRAPHS (DESKTOP) */}
					<div className="hidden md:block flex-grow text-lg lg:text-xl md:text-justify text-white">
						<p className="mb-6">
							I graduated from Fanshawe College, where I learned the
							fundamentals of web development. Since then, I’ve been committed
							to taking on diverse projects and exploring new tools to broaden
							my understanding of the technical landscape. My approach to work
							is defined by curiosity and determination; I'm excited by
							challenges, and problem-solving brings a deep sense of
							accomplishment.
						</p>

						<p className="mb-6 ">
							<span className="italic bg-shark-300">
								Here are some technologies I'm comfortable working with:
							</span>
						</p>

						<div class="space-y-2 mb-6">
							<div class="flex">
								<div class="w-1/5 font-bold underline">Front-End:</div>
								<div class="flex-1">
									React, JavaScript (ES6+), TypeScript, HTML5, CSS3
								</div>
							</div>
							<div class="flex">
								<div class="w-1/5 font-bold underline">Back-End:</div>
								<div class="flex-1">
									Node, LAMP stack (Linux, Apache, MySQL, PHP)
								</div>
							</div>
							<div class="flex">
								<div class="w-1/5 font-bold underline">Databases:</div>
								<div class="flex-1">
									MySQL, Microsoft SQL Server, Postgres, Firebase, MongoDB
								</div>
							</div>
							<div class="flex">
								<div class="w-1/5 font-bold underline">Styling:</div>
								<div class="flex-1">Tailwind, MUI, Bootstrap</div>
							</div>
							<div class="flex">
								<div class="w-1/5 font-bold underline">CMS:</div>
								<div class="flex-1">WordPress</div>
							</div>
							<div class="flex">
								<div class="w-1/5 font-bold underline">Scripting:</div>
								<div class="flex-1">Python</div>
							</div>
						</div>

						<p className="mb-6">
							Solving problems captivates me. Driven by curiosity and optimism,
							no challenge seems insurmountable. When there's a demand, my focus
							sharpens, and my resolve to find a solution is unshakable.
						</p>

						<p className="">
							When I'm not working, I like to be in the sun and stay active by
							playing volleyball or running. I always try to make time to
							hangout with friends and family, and its rare that I'm not smiling
							or laughing. I can't live without music, I love reading
							science-fiction novels, and I'm a bit of a cinephile.
						</p>
					</div>
				</div>

				{/* Technology icons section */}
				<div className="hidden lg:block lg:w-1/5 xl:w-1/4 lg:mt-[15rem] 2xl:mt-[13rem] xl:px-20 lg:ml-8 2xl:ml-16">
					<div className="grid grid-cols-2 gap-y-8">
						{techIcons.map((tech, index) => (
							<div
								key={index}
								className="flex justify-center text-gray-500 text-5xl"
							>
								{tech.icon}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* PARAGRAPHS (MOBILE) */}
			<div className="container mx-auto block md:hidden px-4 py-4 sm:py-8">
				<div className="text-white mb-6">
					<p className="text-lg lg:text-xl md:text-justify">
						I graduated from Fanshawe College, where I learned the fundamentals
						of web development. Since then, I’ve been dedicated to expanding my
						knowledge, taking on diverse projects and exploring new tools to
						improve and innovate. I find joy in learning and embrace new
						challenges with enthusiasm, seeing them as an opportunity to advance
						my expertise even further.
					</p>
				</div>

				<p className="mb-6 text-white">
					<span className="italic bg-shark-300">
						Here are some technologies I'm comfortable working with:
					</span>
				</p>

				<div class="space-y-2 mb-6 text-white">
					<div class="flex">
						<div class="w-1/5 font-bold underline">Front-End:</div>
						<div class="flex-1">
							React, JavaScript (ES6+), TypeScript, HTML5, CSS3
						</div>
					</div>
					<div class="flex">
						<div class="w-1/5 font-bold underline">Back-End:</div>
						<div class="flex-1">
							Node, LAMP stack (Linux, Apache, MySQL, PHP)
						</div>
					</div>
					<div class="flex">
						<div class="w-1/5 font-bold underline">Databases:</div>
						<div class="flex-1">
							MySQL, Microsoft SQL Server, Postgres, Firebase, MongoDB
						</div>
					</div>
					<div class="flex">
						<div class="w-1/5 font-bold underline">Styling:</div>
						<div class="flex-1">Tailwind, MUI, Bootstrap</div>
					</div>
					<div class="flex">
						<div class="w-1/5 font-bold underline">CMS:</div>
						<div class="flex-1">WordPress</div>
					</div>
					<div class="flex">
						<div class="w-1/5 font-bold underline">Scripting:</div>
						<div class="flex-1">Python</div>
					</div>
				</div>

				<div className="text-white mb-6">
					<p className="text-lg md:text-xl md:text-justify">
						Solving problems captivates me. Driven by curiosity and optimism, no
						challenge seems insurmountable. When there's a demand, my focus
						sharpens, and my resolve to find a solution is unshakable.
					</p>
				</div>

				<div className="text-white">
					<p className="text-lg md:text-xl md:text-justify">
						When I'm not working, I like to be in the sun and stay active by
						playing volleyball or running. I always try to make time to hangout
						with friends and family, and its rare that I'm not smiling or
						laughing. I can't live without music, I love reading science-fiction
						novels, and I'm a bit of a cinephile.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
