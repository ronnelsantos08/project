// src/App.tsx
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar1';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Services from './components/Services';

const App: React.FC = () => {
  // State to hold the dynamic background color for the body
  // Start with explicit RGB for --bg-dark to avoid variable resolution issues in JS calculation
  const [bodyBgColor, setBodyBgColor] = useState('rgb(10, 10, 10)');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // Define the scroll range over which the body background will transition.
      // Adjust these values to control when the global background starts and finishes changing.
      // Example: Start transition when 20% of the viewport has scrolled,
      // and complete it when 120% of the viewport has scrolled.
      const startTransitionScroll = viewportHeight * 0.2;
      const endTransitionScroll = viewportHeight * 1.2;

      let progress = 0;
      if (scrollY > startTransitionScroll) {
        progress = Math.min(1, (scrollY - startTransitionScroll) / (endTransitionScroll - startTransitionScroll));
      }

      // Interpolate RGB values from your dark background color to white
      // Ensure these RGB values match your CSS variables (var(--bg-dark))
      const darkRgb = [10, 10, 10]; // Corresponds to #0a0a0a
      const whiteRgb = [255, 255, 255]; // Pure white

      const r = darkRgb[0] + (whiteRgb[0] - darkRgb[0]) * progress;
      const g = darkRgb[1] + (whiteRgb[1] - darkRgb[1]) * progress;
      const b = darkRgb[2] + (whiteRgb[2] - darkRgb[2]) * progress;

      const newColor = `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;

      // Only update state if the color actually changes to prevent unnecessary re-renders
      if (newColor !== bodyBgColor) {
        setBodyBgColor(newColor);
        // console.log(`Scroll: ${scrollY}, Progress: ${progress.toFixed(2)}, New Body Color: ${newColor}`); // Uncomment for debugging
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [bodyBgColor]); // Re-run effect when bodyBgColor changes (this helps with cleanup)

  useEffect(() => {
    // Apply the calculated background color to the body element directly
    document.body.style.backgroundColor = bodyBgColor;
    // console.log(`Applied Body Background: ${bodyBgColor}`); // Uncomment for debugging
  }, [bodyBgColor]); // This effect ensures the style is applied whenever bodyBgColor updates

  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Skills />
      <Services />
      {/* Add other sections below here */}
    </>
  );
};

export default App;