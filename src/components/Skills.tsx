// src/components/Skills.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Skills.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface Skill {
  name: string;
  lottieSrc: string;
}

const skills: Skill[] = [
  { name: 'React', lottieSrc: '/animations/react.lottie' },
  { name: 'TypeScript', lottieSrc: '/animations/ts.lottie' },
  { name: 'Node.js', lottieSrc: '/animations/node.lottie' },
  { name: 'CSS3', lottieSrc: '/animations/css.lottie' },
  { name: 'HTML5', lottieSrc: '/animations/html.lottie' },
  { name: 'Git', lottieSrc: '/animations/git.lottie' },
  { name: 'Java', lottieSrc: '/animations/java.lottie' },
  { name: 'Databases', lottieSrc: '/animations/sql.lottie' },
];

const interpolateColor = (start: number[], end: number[], progress: number) =>
  `rgb(${start.map((s, i) => Math.round(s + (end[i] - s) * progress)).join(',')})`;

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ticking = useRef(false);

  const [bgColor, setBgColor] = useState('rgb(255, 255, 255)');
  const [textColor, setTextColor] = useState('rgb(0, 0, 0)');

  const handleScroll = useCallback(() => {
    if (ticking.current || !sectionRef.current) return;

    ticking.current = true;
    requestAnimationFrame(() => {
      const { top } = sectionRef.current!.getBoundingClientRect();
      const vh = window.innerHeight;

      const start = vh * 0.9;
      const end = vh * 0.1;
      let progress = 0;

      if (top < start && top > end) {
        progress = (start - top) / (start - end);
      } else if (top <= end) {
        progress = 1;
      }

      progress = Math.min(1, Math.max(0, progress));

      const white = [255, 255, 255];
      const black = [0, 0, 0];
      const dark = [10, 10, 10];

      setBgColor(interpolateColor(white, dark, progress));
      setTextColor(interpolateColor(black, white, progress));

      ticking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const sectionStyle = {
    backgroundColor: bgColor,
    transition: 'background-color 0.4s ease-out',
  };

  const borderColor = textColor === 'rgb(0, 0, 0)'
    ? 'rgba(0, 0, 0, 0.2)'
    : 'rgba(255, 255, 255, 0.2)';

  return (
    <section id="skills" className="skills-section" ref={sectionRef} style={sectionStyle}>
      <h2 className="skills-heading" style={{ color: textColor }}>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ border: `1px solid ${borderColor}` }}
          >
            <div className="skill-icon-container">
              <DotLottieReact
                src={skill.lottieSrc}
                loop
                autoplay
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <p className="skill-name" style={{ color: textColor }}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
