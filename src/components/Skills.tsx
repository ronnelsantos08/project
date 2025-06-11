// src/components/Skills.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Skills.css'; // Import the new CSS file
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

// Define a type for your skill data
interface Skill {
  name: string;
  lottieSrc: string; // Changed from 'icon' to 'lottieSrc' for Lottie animation URL
}

// Example skill data (replace with your actual Lottie animation URLs)
const skills: Skill[] = [
  // Using the provided Lottie URL for all as an example.
  // In a real app, you'd have a different Lottie URL for each skill.
  { name: 'React', lottieSrc: '/animations/react.lottie' },
  { name: 'TypeScript', lottieSrc: '/animations/ts.lottie' },
  { name: 'Node.js', lottieSrc: '/animations/node.lottie' },
  { name: 'CSS3', lottieSrc: '/animations/css.lottie' },
  { name: 'HTML5', lottieSrc: '/animations/html.lottie' },
  { name: 'Git', lottieSrc: '/animations/git.lottie' },
  { name: 'Java', lottieSrc: '/animations/java.lottie' },
  { name: 'Databases', lottieSrc: '/animations/sql.lottie' },
];

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Initial background color is white, target is dark
  const [sectionBgColor, setSectionBgColor] = useState('rgb(255, 255, 255)');
  // Initial text color is black, target is white
  const [headingTextColor, setHeadingTextColor] = useState('rgb(0, 0, 0)');
  const [cardTextColor, setCardTextColor] = useState('rgb(0, 0, 0)');

  const handleScroll = useCallback(() => {
    if (sectionRef.current) {
      const { top, } = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Define the scroll range for the transition
      const startTransitionPoint = viewportHeight * 0.9;
      const endTransitionPoint = viewportHeight * 0.1;

      let progress = 0;
      if (top < startTransitionPoint && top > endTransitionPoint) {
          progress = Math.min(1, Math.max(0, (startTransitionPoint - top) / (startTransitionPoint - endTransitionPoint)));
      } else if (top <= endTransitionPoint) {
          progress = 1;
      } else {
          progress = 0;
      }

      // --- Background color interpolation (White to Dark) ---
      const initialBgRgb = [255, 255, 255]; // White
      const targetBgRgb = [10, 10, 10]; // Dark (#0a0a0a)
      const bgR = initialBgRgb[0] + (targetBgRgb[0] - initialBgRgb[0]) * progress;
      const bgG = initialBgRgb[1] + (targetBgRgb[1] - initialBgRgb[1]) * progress;
      const bgB = initialBgRgb[2] + (targetBgRgb[2] - initialBgRgb[2]) * progress;
      setSectionBgColor(`rgb(${Math.round(bgR)}, ${Math.round(bgG)}, ${Math.round(bgB)})`);

      // --- Text color interpolation (Black to White) ---
      const initialTextRgb = [0, 0, 0]; // Black
      const targetTextRgb = [255, 255, 255]; // White

      // For heading text
      const hR = initialTextRgb[0] + (targetTextRgb[0] - initialTextRgb[0]) * progress;
      const hG = initialTextRgb[1] + (targetTextRgb[1] - initialTextRgb[1]) * progress;
      const hB = initialTextRgb[2] + (targetTextRgb[2] - initialTextRgb[2]) * progress;
      setHeadingTextColor(`rgb(${Math.round(hR)}, ${Math.round(hG)}, ${Math.round(hB)})`);

      // For card text
      const cR = initialTextRgb[0] + (targetTextRgb[0] - initialTextRgb[0]) * progress;
      const cG = initialTextRgb[1] + (targetTextRgb[1] - initialTextRgb[1]) * progress;
      const cB = initialTextRgb[2] + (targetTextRgb[2] - initialTextRgb[2]) * progress;
      setCardTextColor(`rgb(${Math.round(cR)}, ${Math.round(cG)}, ${Math.round(cB)})`);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const sectionStyle = {
    backgroundColor: sectionBgColor,
    transition: 'background-color 0.5s ease-out', // Smooth background transition
  };

  return (
    <section id="skills" className="skills-section" ref={sectionRef} style={sectionStyle}>
      <h2 className="skills-heading" style={{ color: headingTextColor }}>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{ border: `1px solid ${headingTextColor === 'rgb(0, 0, 0)' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)'}` }}>
            <div className="skill-icon-container">
              {/* Replaced <img> with DotLottieReact */}
              <DotLottieReact
                src={skill.lottieSrc} // Use the lottieSrc from your skill data
                loop
                autoplay
                style={{ width: '100%', height: '100%' }} // Ensure Lottie fills its container
              />
            </div>
            <p className="skill-name" style={{ color: cardTextColor }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;