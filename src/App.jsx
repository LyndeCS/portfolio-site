import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DividerSVG from "./components/DividerSVG";
import DividerPeaksSVG from "./components/DividerPeaksSVG";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<DividerSVG />
			<About />
			<DividerPeaksSVG />
			<Portfolio />
			<DividerPeaksSVG />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
