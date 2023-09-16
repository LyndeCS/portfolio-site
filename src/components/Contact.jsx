import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarker,
	FaTwitter,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";

const Contact = () => {
	return (
		<section id="contact" className="bg-smoke-500 py-20">
			<div className="container mx-auto">
				<h2 className="text-2xl text-white mb-16 italic">
					<span className="">
						<span className="text-meadow-500">&lt;</span>Contact{" "}
						<span className="text-meadow-500">&#47;&gt;</span>
					</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Left column for personal information */}
					<div className="max-w-md mx-auto p-6 bg-smoke-500">
						<h2 className="text-white text-3xl mb-4">Contact Information</h2>
						<ul className="text-white">
							<li className="mb-4 flex items-center">
								<FaEnvelope className="mr-2" />
								Email: lyndechris@gmail.com
							</li>
							<li className="mb-4 flex items-center">
								<FaMapMarker className="mr-2" />
								Location: London, Ontario
							</li>
						</ul>
						{/* You can add a link to your resume here */}
						<a
							href="/path/to/your/resume.pdf"
							className="text-meadow-500 hover:underline"
						>
							Download Resume
						</a>
					</div>

					{/* Middle column for the contact form */}
					<div className="max-w-md mx-auto p-6 bg-smoke-500">
						<h2 className="text-white text-3xl mb-8">
							Feel free to reach out to me
						</h2>
						<form>
							<div className="mb-4">
								<input
									type="text"
									id="name"
									name="name"
									placeholder="Your Name"
									className="w-full px-3 py-2 bg-smoke-500 text-white border-b border-meadow-500 focus:outline-none focus:ring-1 focus:ring-meadow-500"
								/>
							</div>
							<div className="mb-4">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Your Email"
									className="w-full px-3 py-2 bg-smoke-500 text-white border-b border-meadow-500 focus:outline-none focus:ring-1 focus:ring-meadow-500"
								/>
							</div>
							<div className="mb-4">
								<textarea
									id="message"
									name="message"
									rows="5"
									placeholder="Your Message"
									className="w-full px-3 py-2 bg-smoke-500 text-white border border-meadow-500 rounded-lg focus:outline-none focus:ring-1 focus:ring-meadow-500"
								></textarea>
							</div>
							<div className="text-center">
								<button
									type="submit"
									className="bg-transparent text-white px-4 py-2 rounded-lg border border-meadow-500 transition-all duration-500 hover:bg-meadow-100 hover:bg-opacity-5"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>

					{/* Right column for social media links */}
					<div className="max-w-md mx-auto p-6 bg-smoke-500">
						<h2 className="text-white text-3xl mb-4">Connect with Me</h2>
						<ul className="text-white">
							<li className="mb-4 flex items-center">
								<FaGithub />
								<a
									href="https://www.linkedin.com/in/chrislynde/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-meadow-500 hover:underline ml-2"
								>
									GitHub
								</a>
							</li>
							<li className="mb-4 flex items-center">
								<FaLinkedin />
								<a
									href="https://www.linkedin.com/in/chrislynde/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-meadow-500 hover:underline ml-2"
								>
									LinkedIn
								</a>
							</li>
							<li className="mb-4 flex items-center">
								<FaTwitter />
								<a
									href="https://twitter.com/your-twitter-profile"
									target="_blank"
									rel="noopener noreferrer"
									className="text-meadow-500 hover:underline ml-2"
								>
									Twitter
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
