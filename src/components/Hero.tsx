// src/components/Hero.tsx
import React, { useEffect, useRef, useState } from 'react'; // Import useRef, useEffect, useState
import '../styles/Hero.css'; // Assuming your hero-specific CSS is in Hero.css now
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null); // Create a ref for the hero section
  const [opacity, setOpacity] = useState(1); // State for opacity
  const [brightness, setBrightness] = useState(100); // State for brightness (for white fade)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const { bottom, } = heroRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Calculate how much of the section is still in view relative to its own height
        // A value of 1 means fully in view, 0 means completely scrolled out
        const scrollProgress = Math.max(0, Math.min(1, bottom / viewportHeight));

        // Calculate new opacity and brightness
        // As scrollProgress goes from 1 (visible) to 0 (leaving top of screen)
        // opacity goes from 1 to 0 (fades out)
        // brightness goes from 100% to a very high value (turns white)
        const newOpacity = scrollProgress;
        const newBrightness = 100 + (1 - scrollProgress) * 900; // Ramps up to 1000% brightness

        setOpacity(newOpacity);
        setBrightness(newBrightness);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <main
        ref={heroRef} // Assign the ref to the main hero section
        className="hero"
        style={{
          opacity: opacity,
          filter: `brightness(${brightness}%)`,
          // Add a smooth transition for these dynamic styles
          transition: 'opacity 0.1s linear, filter 0.1s linear'
        }}
      >
        <div className="hero-content">
          <h1>Empowering Your Business<br/>Through Intelligent Web Solutions.</h1>
          <p></p>
          <div className="cta-group">
            <button className="cta-button">Start Now</button>
            <button className="cta-button-secondary">Projects</button>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">Create</span>
              <span className="stat-label"> We build groundbreaking solutions that solve real-world challenges.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Innovate</span>
              <span className="stat-label">We continuously push boundaries, seeking new possibilities and smarter ways forward.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Deliver</span>
              <span className="stat-label">We consistently provide exceptional results, ensuring success for our clients and partners.</span>
            </div>
          </div>
        </div>

        <div className="hero-graphics">
          <div className="gradient-orb"></div>
          <div className="floating-cards">
            {/* Added styles for Lottie animations to fit cards well */}
            <div className="card card-1">
              <DotLottieReact
                src="https://lottie.host/e25ee8d4-11e3-4304-902f-0f967732fe45/H9ctu6b7VQ.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }} // Ensure Lottie fills the card
              />
            </div>
            <div className="card card-2">
              <DotLottieReact
                src="https://lottie.host/7b7659c2-967e-4a24-af12-f0a5b91c4008/mS11Q8Lc8C.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }} // Ensure Lottie fills the card
              />
            </div>
            <div className="card card-3">
              <DotLottieReact
                src="https://lottie.host/f2470166-08ef-45b5-be74-2025d6d1e43c/7eKPClVsIQ.lottie"
                loop
                autoplay
                style={{ width: '100%', height: '100%' }} // Ensure Lottie fills the card
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;