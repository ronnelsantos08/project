// src/components/Skills.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Skills.css'; // Import the new CSS file

// Define a type for your skill data
interface Skill {
  name: string;
  icon: string; // Path to the icon image
}

// Example skill data (replace with your actual skill icons/images)
const skills: Skill[] = [
  { name: 'React', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=React' },
  { name: 'TypeScript', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=TS' },
  { name: 'Node.js', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=Node' },
  { name: 'CSS3', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=CSS3' },
  { name: 'HTML5', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=HTML5' },
  { name: 'Git', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=Git' },
  { name: 'Figma', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=Figma' },
  { name: 'UI/UX', icon: 'https://placehold.co/80x80/000000/FFFFFF?text=UI/UX' },
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
      // Transition starts when the section is entering the viewport
      // and ends when it's fully visible (or shortly after)
      const startTransitionPoint = viewportHeight * 0.9; // Start transition when section top is 90% from viewport top (i.e., almost fully off-screen below)
      const endTransitionPoint = viewportHeight * 0.1;   // End transition when section top is 10% from viewport top (i.e., almost fully on-screen)

      let progress = 0;
      if (top < startTransitionPoint && top > endTransitionPoint) {
          progress = Math.min(1, Math.max(0, (startTransitionPoint - top) / (startTransitionPoint - endTransitionPoint)));
      } else if (top <= endTransitionPoint) {
          progress = 1; // Ensure full transition if completely scrolled into view
      } else {
          progress = 0; // Ensure initial state before transition starts
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
              <img src={skill.icon} alt={`${skill.name} Icon`} className="skill-icon" />
            </div>
            <p className="skill-name" style={{ color: cardTextColor }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;