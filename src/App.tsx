// src/App.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar1'; // Changed from Navbar1 to Navbar
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Message from './components/Message';
import Footer from './components/Footer';

const App: React.FC = () => {
  // State to hold the dynamic background color for the body
  const [bodyBgColor, setBodyBgColor] = useState('rgb(10, 10, 10)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the scroll range for background transition
      const startTransitionScroll = viewportHeight * 0.2;
      const endTransitionScroll = viewportHeight * 1.2;

      let progress = 0;
      if (scrollY > startTransitionScroll) {
        progress = Math.min(1, (scrollY - startTransitionScroll) / (endTransitionScroll - startTransitionScroll));
      }

      // Interpolate RGB values from dark to white
      const darkRgb = [10, 10, 10]; // Corresponds to #0a0a0a
      const whiteRgb = [255, 255, 255]; // Pure white

      const r = darkRgb[0] + (whiteRgb[0] - darkRgb[0]) * progress;
      const g = darkRgb[1] + (whiteRgb[1] - darkRgb[1]) * progress;
      const b = darkRgb[2] + (whiteRgb[2] - darkRgb[2]) * progress;

      const newColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

      if (newColor !== bodyBgColor) {
        setBodyBgColor(newColor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [bodyBgColor]);

  useEffect(() => {
    // Apply the calculated background color to the body element directly
    document.body.style.backgroundColor = bodyBgColor;
  }, [bodyBgColor]);

  /**
   * Function to smoothly scroll to a specific section by its ID.
   * @param id The ID of the HTML element to scroll to.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Use scrollIntoView with smooth behavior for a pleasant scrolling experience
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Pass the scrollToSection function as a prop to the Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Wrap each section component in a div with a unique ID for navigation */}
      <div id="home">
        <Hero />
      </div>
      <div id="about-me">
        <AboutUs />
      </div>
      <div id="skills"> {/* Added ID for Skills, in case you want to link to it later */}
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-us">
        <Message />
      </div>

      <Footer />
    </>
  );
};

export default App;
