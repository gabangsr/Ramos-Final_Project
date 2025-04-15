import React from 'react';
import './App.css';
import Hiro from './components/Hiro.jsx';
import AboutMe from './components/AboutMe';
import Contact from './components/Contacts';
import Experience from './components/Experience';

function App() {
  return (
    <div
      className="snap-y snap-mandatory overflow-y-scroll h-screen text-gray-900 font-sans"
      style={{ scrollSnapType: 'y mandatory' }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#879183] shadow-md z-10">
        <nav className="max-w-7xl mx-auto p-4 flex justify-center items-center">
          <ul className="flex space-x-8 text-white">
            <li><a href="#hiro">Who am I?</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hiro" className="snap-start h-screen bg-white">
        <Hiro />
      </section>

      <section id="about" className="snap-start h-screen bg-white">
        <AboutMe />
      </section>

      <section
        id="experience"
        className="snap-start h-screen bg-[#D2C6B2] overflow-y-auto no-scrollbar"
        style={{ scrollSnapAlign: 'start' }}>
        <Experience />
      </section>

      <section
        id="contact"
        className="snap-start h-screen bg-white flex justify-center items-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
