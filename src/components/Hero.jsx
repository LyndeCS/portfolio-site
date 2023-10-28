import React from "react";
import softwareSvg from "../assets/art/software.svg";

const Hero = () => {
	return (
		<section className="bg-smoke-500 text-white xl:pt-12 2xl:pt-32 pb-4 md:pb-0 h-[70vh] xl:h-[65vh] flex flex-col justify-center">
			<div className="container mx-auto flex items-center">
				{/* HERO TEXT BLOCK */}
				<div className="w-full xl:w-1/2 text-center xl:text-start">
					<h1 className="text-3xl xs:text-4xl sm:text-6xl xl:mb-6">
						Hi, my name is
					</h1>
					<h2 className="text-5xl xs:text-6xl sm:text-8xl font-bold mb-6 lg:mb-6">
						<span className="text-meadow-500">Christopher</span>.
					</h2>
					<h3 className="text-3xl xs:text-4xl sm:text-6xl mb-6 sm:mb-8">
						I'm a web developer
						<br /> from London, Ontario.
					</h3>
					<p className="text-md xs:text-lg sm:text-2xl mb-8 xl:mb-10 text-white opacity-50 px-4 xl:px-0">
						I'm passionate about creating stylish and intuitive solutions.
					</p>
					<a
						href="#portfolio"
						className="z-10 relative rounded-md px-12 xs:px-24 sm:px-32 bg-transparent border border-meadow-500 text-white py-3 text-lg sm:text-2xl transition-all duration-500 hover:bg-meadow-100 hover:bg-opacity-5"
					>
						See My Work
					</a>
				</div>

				{/* SVG HERO IMG */}
				<div className="hidden xl:block flex-grow">
					<img
						src={softwareSvg}
						alt="Software Illustration"
						className="w-full h-full"
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
