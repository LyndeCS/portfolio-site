import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Navbar = () => {
	return (
		<nav className="bg-smoke-500 py-4 md:py-8 z-10 relative">
			<div className="container mx-auto flex md:justify-between flex-col md:flex-row space-y-6 md:space-y-0 items-center">
				{/* NAV LOGO */}
				<div className="md:block text-white text-xl">
					<span className="text-meadow-500">&lt;</span>Christopher Lynde{" "}
					<span className="text-meadow-500">&#47;&gt;</span>
				</div>

				{/* NAV LINKS */}
				<div className="flex-grow md:flex-none sm:space-x-8 lg:space-x-20 xl:space-x-40 flex justify-around w-full md:w-fit sm:px-12 decoration-meadow-500 decoration-1 underline underline-offset-2 md:no-underline">
					<a
						className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out"
						href="#about"
					>
						About
					</a>
					<a
						className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out"
						href="#portfolio"
					>
						Portfolio
					</a>
					<a
						className="text-white hover:text-meadow-500 text-xl transition duration-300 ease-in-out"
						href="#contact"
					>
						Contact
					</a>
				</div>

				{/* SOCIAL MEDIA ICONS */}
				<div className="hidden md:flex items-center space-x-4">
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2"
						href="https://www.linkedin.com/in/chrislynde/"
					>
						<FaLinkedin />
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2"
						href="https://twitter.com/lynde_chris"
					>
						<FaTwitter />
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						className="text-xl text-gray-400 hover:text-meadow-500 transition duration-300 ease-in-out flex items-center space-x-2"
						href="https://github.com/LyndeCS"
					>
						<FaGithub />
					</a>
					<a
						className="text-xl text-meadow-500 hover:text-meadow-700 transition duration-300 ease-in-out"
						href="mailto:lyndechris@gmail.com"
					>
						<FiMail />
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
