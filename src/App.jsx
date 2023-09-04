import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DividerSVG from './components/DividerSVG';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DividerSVG />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
