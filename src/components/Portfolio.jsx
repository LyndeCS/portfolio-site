import React from "react";
import ajendaImg from "../assets/a_card.png";
import ajendaLandingImg from "../assets/alp_card.png";
import streamwakeImg from "../assets/sw_card.png";
import { FaGithub, FaReact, FaNodeJs, FaDiscord } from "react-icons/fa";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";
import { SiMui, SiFirebase, SiSequelize } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Portfolio = () => {
	// Data for portfolio items
	const projects = [
		{
			id: 1,
			title: "Ajenda - Landing Page",
			description:
				"Landing page to serve as the value proposition to sign up for the Ajenda app.",
			image: ajendaLandingImg,
			tools: ["React", "TypeScript", "Tailwind"],
			link: "https://ajenda-landing.netlify.app/",
			git: "https://github.com/LyndeCS/ajenda",
		},
		{
			id: 2,
			title: "Ajenda - Task Manager/Scheduler",
			description:
				"Task management and scheduling app. Create tasks to be accomplished, then schedule them in the calendar to stay organized.",
			image: ajendaImg,
			tools: ["React", "Firebase", "MUI"],
			link: "https://ajenda.web.app/",
			git: "https://github.com/LyndeCS/ajenda-landing",
		},
		{
			id: 3,
			title: "Streamwake - Discord bot",
			description:
				"Make watching shows with friends easy. Create a watchlist, suggest and vote for shows, and track episodes each user has watched.",
			image: streamwakeImg,
			tools: ["Node.js", "Discord.js", "MySQL"],
			link: "https://github.com/LyndeCS/Streamwake",
			git: "https://github.com/LyndeCS/Streamwake",
		},
	];

	return (
		<section
			id="portfolio"
			className="bg-smoke-500 p-4 sm:px-8 md:pt-12 xl:py-20 lg:min-h-[80vh] min-[2000px]:min-h-[50vh]"
		>
			<div className="container mx-auto">
				{/* SECTION HEADING */}
				<h2 className="text-lg md:text-2xl text-white mb-8 md:mb-16 italic">
					<span className="">
						<span className="text-meadow-500">&lt;</span>Portfolio{" "}
						<span className="text-meadow-500">&#47;&gt;</span>
					</span>
				</h2>

				<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-8 2xl:gap-x-24 gap-y-12 md:gap-y-16">
					{projects.map((item) => (
						<div
							key={item.id}
							className="bg-smoke-500 shadow-sm border-t border-t-meadow-500 shadow-meadow-500 rounded-lg h-min lg:h-[30rem] flex flex-col p-2"
						>
							<a href={item.link} target="_blank" rel="noopener noreferrer">
								<img
									src={item.image}
									alt={item.title}
									className="rounded-t-lg brightness-90 hover:brightness-100"
								/>
							</a>
							<div className="flex">
								<hr className="mt-2 bg-gradient-to-l from-meadow-500 to-smoke-500 h-[1px] w-1/2 border-none"></hr>
								<hr className="mt-2 bg-gradient-to-r from-meadow-500 to-smoke-500 h-[1px] w-1/2 border-none"></hr>
							</div>
							<div className="flex flex-col justify-between h-2/3 pt-2 px-2">
								<a href={item.link} target="_blank" rel="noopener noreferrer">
									<h3 className="text-white text-2xl mt-2 mb-4 hover:underline">
										{item.title}
									</h3>
								</a>
								<p className="text-white opacity-70 mb-auto">
									{item.description}
								</p>
								<div className="flex flex-wrap mt-8 xl:mt-0 gap-x-2 xs:gap-x-4">
									{item.tools.map((tool, index) => (
										<span key={index} className="text-md flex items-center">
											{/* Icon and technology name */}
											{tool === "React" && (
												<FaReact size={20} className="mr-1 text-[#60DAFA]" />
											)}
											{tool === "Node.js" && (
												<FaNodeJs size={20} className="mr-1 text-[#8DC94A]" />
											)}
											{tool === "Firebase" && (
												<SiFirebase size={20} className="mr-1 text-[#FEA613]" />
											)}
											{tool === "Discord.js" && (
												<FaDiscord size={20} className="mr-1 text-[#5665ED]" />
											)}
											{tool === "TypeScript" && (
												<BiLogoTypescript
													size={20}
													className="mr-1 text-[#3077C5]"
												/>
											)}
											{tool === "Tailwind" && (
												<BiLogoTailwindCss
													size={20}
													className="mr-1 text-[#0DC4B9]"
												/>
											)}
											{tool === "MUI" && (
												<SiMui size={20} className="mr-1 text-blue-500" />
											)}
											{tool === "MySQL" && (
												<GrMysql size={20} className="mr-1 text-[#00758F]" />
											)}
											{tool === "Sequelize" && (
												<SiSequelize
													size={20}
													className="mr-1 text-[#06AFEF]"
												/>
											)}
											<span className="text-white opacity-70 hidden xs:block lg:hidden min-[1350px]:block">
												{tool}
											</span>
										</span>
									))}
									<a
										href={item.git}
										target="_blank"
										rel="noopener noreferrer"
										className="text-md ml-auto text-meadow-500 flex flex-row gap-x-2 items-center hover:underline"
									>
										<span className="hidden xl:flex">GitHub</span>
										<FaGithub size={24} />
									</a>
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
