// src/components/AboutUs.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/AboutUs.css';
import AboutUsImage from '/images/about.webp';

const interpolateColor = (start: number[], end: number[], progress: number): number[] =>
  start.map((s, i) => s + (end[i] - s) * progress);

const clamp = (val: number, min: number, max: number): number => Math.min(max, Math.max(min, val));

const AboutUs: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRunning = useRef(false);

  const [styleState, setStyleState] = useState({
    bgColor: 'rgba(10, 10, 10, 0.95)',
    h1Color: 'rgb(255, 255, 255)',
    pColor: 'rgb(148, 163, 184)',
    imageOpacity: 0,
  });

  const handleScroll = useCallback(() => {
    if (!sectionRef.current || scrollRunning.current) return;

    scrollRunning.current = true;
    requestAnimationFrame(() => {
      const { top, height } = sectionRef.current!.getBoundingClientRect();
      const vh = window.innerHeight;

      const pWhite = clamp((vh * 0.7 - top) / (vh * 0.7), 0, 1);
      const pBlack = clamp((0 - top) / (height * 0.5), 0, 1);

      // Background Color
      const toWhite = interpolateColor([10, 10, 10], [255, 255, 255], pWhite);
      const toBlack = interpolateColor(toWhite, [0, 0, 0], pBlack);
      const bgColor = `rgba(${toBlack.map(Math.round).join(', ')}, 0.95)`;

      // H1 Text Color
      const h1ToBlack = interpolateColor([255, 255, 255], [0, 0, 0], pWhite);
      const h1ToWhite = interpolateColor(h1ToBlack, [255, 255, 255], pBlack);
      const h1Color = `rgb(${h1ToWhite.map(Math.round).join(', ')})`;

      // P Text Color
      const pToBlack = interpolateColor([148, 163, 184], [0, 0, 0], pWhite);
      const pToWhite = interpolateColor(pToBlack, [255, 255, 255], pBlack);
      const pColor = `rgb(${pToWhite.map(Math.round).join(', ')})`;

      // Image Opacity
      const imageOpacity = 1 - pBlack;

      setStyleState({ bgColor, h1Color, pColor, imageOpacity });

      scrollRunning.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (styleState.imageOpacity === 0) {
        setStyleState((prev) => ({ ...prev, imageOpacity: 1 }));
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="about-us-section"
      style={{
        backgroundColor: styleState.bgColor,
        backdropFilter: 'blur(10px)',
        transition: 'background-color 0.5s ease-out',
      }}
    >
      <div className="gradient-orb"></div>

      <div className="about-us-content">
        <h1 style={{ color: styleState.h1Color }}>About Me</h1>
        <p style={{ color: styleState.pColor }}>
          I'm Ronnel Santos, a passionate Information Technology freelancer based in Cavite,
          Philippines. With a Bachelor's degree in IT and hands-on experience in web development
          and data analysis, I bring a versatile skill set to every project I take on. I specialize
          in crafting dynamic, responsive websites and interactive front-end experiences using
          React, TypeScript, Vite, and GSAP.

          From building smooth scroll animations and advanced image galleries to integrating custom
          UI components and performance-optimized layouts, I focus on delivering clean, efficient
          code with a creative edge. I also have a strong background in data entry and technical
          analysis, which adds structure and precision to my work.

          Driven by curiosity and continuous learning, I enjoy turning ideas into polished digital
          solutions that make an impact.
        </p>
      </div>

      <div className="about-us-image-container">
        <img
          src={AboutUsImage}
          alt="About Us"
          className="about-us-image"
          style={{
            opacity: styleState.imageOpacity,
            transition: 'opacity 1s ease-in-out',
          }}
        />
      </div>
    </section>
  );
};

export default AboutUs;
