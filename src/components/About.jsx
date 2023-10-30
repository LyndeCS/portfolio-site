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
		<section id="about" className="bg-smoke-500 pt-4 md:pt-24">
			<div className="container mx-auto flex justify-start px-4 md:px-0">
				{/* Left section with image and social links */}
				<div className="w-1/4 h-min flex-shrink">
					{/* Profile image */}
					<img
						src={headshot}
						alt="Your Name"
						className="rounded w-24 md:w-48 h-32 md:h-64 object-cover scale-x-[-1]"
					/>

					{/* Social media links */}
					<div className="mt-8 flex flex-col space-y-4 text-sm">
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
						<hr className="w-[90px] md:w-[190px] bg-gray-500 h-[1px] border-none opacity-50"></hr>

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
					<div className="flex flex-col h-full justify-around md:h-min text-2xl xs:text-3xl sm:text-4xl sm:pl-4 md:pl-0">
						<h1 className="font-bold text-white mb-6">
							My name is{" "}
							<span className="text-meadow-500">Christopher Lynde</span>.
						</h1>
						<h1 className="font-bold text-white md:mb-12">
							I'm a full-stack developer with a passion for creating{" "}
							<span className="underline italic decoration-meadow-500">
								stylish and intuitive interfaces.
							</span>
						</h1>
					</div>

					{/* DESKTOP PARAGRAPHS */}
					<div className="hidden md:block flex-grow text-lg lg:text-xl md:text-justify text-white">
						<p className="mb-6">
							I believe in respecting the user.{" "}
							<span className="italic decoration-meadow-500 bg-shark-300">
								Fewer clicks, faster results.
							</span>{" "}
							In order to deliver on this principle, I'm driven to discover all
							that is possible of the tools at my disposal. As a result, and in
							addition to being naturally curious, I am excited to engage with
							new technologies and take every opportunity to synthesize new
							knowledge in order to build the best product imaginable.
						</p>

						<p className="mb-6">
							I graduated from the Web Development program at Fanshawe College
							in 2021, where I learned the foundations of HTML5, CSS3,
							JavaScript (ES6), LAMP (Linux, Apache, MySQL, PHP), and CMS
							(WordPress). Since then, I've added React (up to v18), TypeScript,
							Firebase DB (NoSQL), and Node to my repertoire, as well as
							Bootstrap, MUI, and Tailwind for styling.
						</p>

						<p className="mb-6">
							I spend most of my time creating websites, apps, discord bots, you
							name it, in order to improve my skills as a developer. I gravitate
							towards building interfaces - I love finding ways to make
							interactions as intuitive and accessible as possible while
							maintaining a sleek and thematic style.
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

			{/* MOBILE PARAGRAPHS */}
			<div className="container mx-auto block md:hidden px-4 py-4">
				<div className="text-white mb-6">
					<p className="text-lg lg:text-xl md:text-justify">
						I believe in respecting the user.{" "}
						<span className="italic decoration-meadow-500 bg-shark-300">
							Fewer clicks, faster results.
						</span>{" "}
						In order to deliver on this principle, I'm driven to discover all
						that is possible of the tools at my disposal. As a result, and in
						addition to being naturally curious, I am excited to engage with new
						technologies and take every opportunity to synthesize new knowledge
						in order to build the best product imaginable.
					</p>
				</div>

				<div className="text-white mb-6">
					<p className="text-lg md:text-xl md:text-justify">
						I graduated from the Web Development program at Fanshawe College in
						2021, where I learned the foundations of HTML5, CSS3, JavaScript
						(ES6), LAMP (Linux, Apache, MySQL, PHP), and CMS (WordPress). Since
						then, I've added React (up to v18), TypeScript, Firebase DB (NoSQL),
						and Node to my repertoire, as well as Bootstrap, MUI, and Tailwind
						for styling.
					</p>
				</div>

				<div className="text-white mb-6">
					<p className="text-lg md:text-xl md:text-justify">
						I spend most of my time creating websites, apps, discord bots, you
						name it, in order to improve my skills as a developer. I gravitate
						towards building interfaces - I love finding ways to make
						interactions as intuitive and accessible as possible while
						maintaining a sleek and thematic style.
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
