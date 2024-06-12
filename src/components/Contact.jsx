import React, { useRef } from "react";
import {
	FaEnvelope,
	FaMapMarker,
	FaTwitter,
	FaLinkedin,
	FaGithub,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
	const formRef = useRef();
	emailjs.init("6J4-IxS7Vyx3iqJxm");

	const handleSubmit = (e) => {
		e.preventDefault();

		// const templateParams = {
		// 	from_name: e.target.name.value,
		// 	from_email: e.target.email.value,
		// 	from_message: e.target.message.value,
		// };

		emailjs
			.sendForm(
				"default_service",
				"template_izdc39a",
				e.target,
				"6J4-IxS7Vyx3iqJxm"
			)
			.then(
				(result) => {
					alert("Email sent successfully.");
					formRef.current.reset();
				},
				(error) => {
					alert("Email failed to send.");
				}
			);
	};

	return (
		<section id="contact" className="bg-smoke-500 pt-4 md:pt-12 pb-12 md:pb-20 px-8">
			<div className="container mx-auto">
				{/* SECTION HEADER */}
				<h2 className="text-lg md:text-2xl text-white mb-8 md:mb-16 italic">
					<span className="">
						<span className="text-meadow-500">&lt;</span>Contact{" "}
						<span className="text-meadow-500">&#47;&gt;</span>
					</span>
				</h2>
				{/* HEADER */}
				<h1 className="text-xl sm:text-2xl lg:text-4xl text-white text-center mb-12 lg:mb-24 font-bold mx-auto">
					Feel free to reach out regarding job opportunities, project ideas, or
					anything else.
				</h1>
				<div className="flex flex-col lg:flex-row gap-x-16">
					{/* Left column for personal information */}
					<div className="lg:w-1/4 xl:w-1/3 text-white order-2 lg:order-1 mb-2 lg:mb-0">
						<ul className="text-white text-lg lg:text-xl flex justify-around lg:block flex-wrap">
							<li className="mb-2 xs:mb-0 lg:mb-8 flex items-center justify-end">
								<FaEnvelope className="mr-2" />
								lyndechris@gmail.com
							</li>
							<li className="flex items-center justify-end">
								<FaMapMarker className="mr-2" />
								London, Ontario
							</li>
						</ul>
					</div>

					{/* Middle column for the contact form */}
					<div className="lg:w-2/4 xl:w-1/3 order-1 lg:order-2 mb-20 lg:mb-0">
						<form ref={formRef} id="contact-form" onSubmit={handleSubmit}>
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
					<div className="lg:w-1/4 xl:w-1/3 order-3">
						<ul className="flex justify-around lg:block text-lg lg:text-xl text-white flex-wrap gap-x-4 gap-y-4">
							<li className="lg:mb-8 flex items-center">
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
							<li className="lg:mb-8 flex items-center">
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
							<li className="lg:mb-8 flex items-center">
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
