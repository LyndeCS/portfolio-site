import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-smoke-500 py-20">
      <div className="container mx-auto">
        <h2 className="text-2xl text-white mb-16 italic"><span className=""><span className="text-meadow-500">&lt;</span>Contact <span className="text-meadow-500">&#47;&gt;</span></span></h2>
        <div className="max-w-md mx-auto p-6 bg-smoke-100 rounded-lg">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-3 py-2 bg-smoke-700 text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-meadow-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-3 py-2 bg-smoke-700 text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-meadow-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-3 py-2 bg-smoke-700 text-gray-800 rounded-lg focus:outline-none focus:ring focus:ring-meadow-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-meadow-500 text-white px-4 py-2 rounded-lg hover:bg-meadow-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
