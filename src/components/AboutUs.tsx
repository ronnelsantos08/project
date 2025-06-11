// src/components/AboutUs.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/AboutUs.css';
import AboutUsImage from '/images/about.webp';

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null); // Corrected RefObject type for consistency
  const [aboutUsBgColor, setAboutUsBgColor] = useState('rgba(10, 10, 10, 0.95)');
  const [h1TextColor, setH1TextColor] = useState('rgb(255, 255, 255)');
  const [pTextColor, setPTextColor] = useState('rgb(148, 163, 184)');
  const [imageOpacity, setImageOpacity] = useState(0); // For fade-in
  // Removed imageParallaxY state as it's no longer needed

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const { top } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress for background/text color transition
      const startTransitionPoint = viewportHeight * 0.7;
      const endTransitionPoint = viewportHeight * 0;
      let progress = 0;
      if (top < startTransitionPoint && top >= endTransitionPoint) {
          progress = Math.min(1, Math.max(0, (startTransitionPoint - top) / (startTransitionPoint - endTransitionPoint)));
      } else if (top < endTransitionPoint) {
          progress = 1;
      } else {
          progress = 0;
      }

      // --- Background color interpolation ---
      const darkBgRgb = [10, 10, 10];
      const whiteBgRgb = [255, 255, 255];
      const bgR = darkBgRgb[0] + (whiteBgRgb[0] - darkBgRgb[0]) * progress;
      const bgG = darkBgRgb[1] + (whiteBgRgb[1] - darkBgRgb[1]) * progress;
      const bgB = darkBgRgb[2] + (whiteBgRgb[2] - darkBgRgb[2]) * progress;
      const newBgColor = `rgba(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)}, 0.95)`;
      setAboutUsBgColor(newBgColor);

      // --- Text color interpolation ---
      const initialH1Rgb = [255, 255, 255];
      const initialPRgb = [148, 163, 184];
      const targetTextRgb = [0, 0, 0];

      const h1R = initialH1Rgb[0] + (targetTextRgb[0] - initialH1Rgb[0]) * progress;
      const h1G = initialH1Rgb[1] + (targetTextRgb[1] - initialH1Rgb[1]) * progress;
      const h1B = initialH1Rgb[2] + (targetTextRgb[2] - initialH1Rgb[2]) * progress;
      const newH1Color = `rgb(${Math.round(h1R)}, ${Math.round(h1G)}, ${Math.round(h1B)})`;
      setH1TextColor(newH1Color);

      const pR = initialPRgb[0] + (targetTextRgb[0] - initialPRgb[0]) * progress;
      const pG = initialPRgb[1] + (targetTextRgb[1] - initialPRgb[1]) * progress;
      const pB = initialPRgb[2] + (targetTextRgb[2] - initialPRgb[2]) * progress;
      const newPColor = `rgb(${Math.round(pR)}, ${Math.round(pG)}, ${Math.round(pB)})`;
      setPTextColor(newPColor);

      // --- Parallax for Image (LOGIC REMOVED) ---
      // The parallax calculation and setImageParallaxY call are removed.
    }
  }, []); // Dependencies remain the same, as parallax logic is gone

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]); // Dependency on handleScroll

  // Effect for image fade-in (remains unchanged)
  useEffect(() => {
    const timer = setTimeout(() => {
      setImageOpacity(1);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const sectionStyle = {
    backgroundColor: aboutUsBgColor,
    backdropFilter: 'blur(10px)',
    transition: 'background-color 0.5s ease-out',
  };

  return (
    <section id="about" className="about-us-section" ref={sectionRef} style={sectionStyle}>
      <div className="gradient-orb"></div>

      <div className="about-us-content">
        <h1 style={{ color: h1TextColor }}>About Me</h1>
        <p style={{ color: pTextColor }}>
        I'm Ronnel Santos, a passionate Information Technology freelancer based in Cavite, Philippines. With a Bachelor's degree in IT and hands-on experience in web development and data analysis, I bring a versatile skill set to every project I take on. I specialize in crafting dynamic, responsive websites and interactive front-end experiences using React, TypeScript, Vite, and GSAP.

From building smooth scroll animations and advanced image galleries to integrating custom UI components and performance-optimized layouts, I focus on delivering clean, efficient code with a creative edge. I also have a strong background in data entry and technical analysis, which adds structure and precision to my work.

Driven by curiosity and continuous learning, I enjoy turning ideas into polished digital solutions that make an impact.
        </p>
      </div>
      <div className="about-us-image-container">
        <img
          src={AboutUsImage}
          alt="About Us"
          className="about-us-image"
          style={{
            opacity: imageOpacity,
            transition: 'opacity 1s ease-in-out',
            // Removed transform: `translateY(${imageParallaxY}px)`
            // The image will now remain in its natural position relative to its container.
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;