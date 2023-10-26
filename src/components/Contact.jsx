import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarker,
	FaTwitter,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
// const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
import emailjs from "emailjs-com";

const Contact = () => {
	emailjs.init(PUBLIC_KEY);

	const handleSubmit = (e) => {
		e.preventDefault();

		// const templateParams = {
		// 	from_name: e.target.name.value,
		// 	from_email: e.target.email.value,
		// 	from_message: e.target.message.value,
		// };

		emailjs.sendForm("default_service", TEMPLATE_ID, e.target, PUBLIC_KEY).then(
			(result) => {
				alert("Email sent successfully:", result);
			},
			(error) => {
				alert("Email sending failed:", error);
			}
		);
	};

	return (
		<section id="contact" className="bg-smoke-500 py-20">
			<div className="container mx-auto">
				<h2 className="text-2xl text-white italic mb-16">
					<span className="">
						<span className="text-meadow-500">&lt;</span>Contact{" "}
						<span className="text-meadow-500">&#47;&gt;</span>
					</span>
				</h2>
				<h1 className="text-4xl text-white text-center mb-24 font-bold mx-auto">
					Feel free to reach out regarding job opportunities, project ideas, or
					anything else.
				</h1>
				<div className="flex flex-row gap-16">
					{/* Left column for personal information */}
					<div className="w-1/3 text-white">
						<ul className="text-white text-xl">
							<li className="mb-8 flex items-center justify-end">
								<FaEnvelope className="mr-2" />
								lyndechris@gmail.com
							</li>
							<li className="mb-8 flex items-center justify-end">
								<FaMapMarker className="mr-2" />
								London, Ontario
							</li>
						</ul>
					</div>

					{/* Middle column for the contact form */}
					<div className="w-1/3">
						<form id="contact-form" onSubmit={handleSubmit}>
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
					<div className="w-1/3">
						<ul className="text-white text-xl">
							<li className="mb-8 flex items-center">
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
							<li className="mb-8 flex items-center">
								<FaLinkedin />
								<a
									href="https://github.com/LyndeCS"
									target="_blank"
									rel="noopener noreferrer"
									className="text-meadow-500 hover:underline ml-2"
								>
									LinkedIn
								</a>
							</li>
							<li className="mb-8 flex items-center">
								<FaTwitter />
								<a
									href="https://twitter.com/lynde_chris"
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
