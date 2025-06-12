// src/components/Hero.tsx
import React, { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Hero.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const scrollRunning = useRef(false);

  const [styleState, setStyleState] = useState({
    opacity: 1,
    brightness: 100,
  });

  const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val));

  const handleScroll = useCallback(() => {
    if (scrollRunning.current || !heroRef.current) return;

    scrollRunning.current = true;
    requestAnimationFrame(() => {
      const { bottom } = heroRef.current!.getBoundingClientRect();
      const vh = window.innerHeight;

      const progress = clamp(bottom / vh, 0, 1);

      setStyleState({
        opacity: progress,
        brightness: 100 + (1 - progress) * 900,
      });

      scrollRunning.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial render

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <main
      ref={heroRef}
      className="hero"
      style={{
        opacity: styleState.opacity,
        filter: `brightness(${styleState.brightness}%)`,
        transition: 'opacity 0.1s linear, filter 0.1s linear',
      }}
    >
      <div className="hero-content">
        <h1>Empowering Your Business<br />Through Intelligent Web Solutions.</h1>
        <p></p>
        <div className="cta-group">
          <button className="cta-button">Start Now</button>
          <button className="cta-button-secondary">Projects</button>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">Create</span>
            <span className="stat-label">We build groundbreaking solutions that solve real-world challenges.</span>
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
          <div className="card card-1">
            <DotLottieReact
              src="https://lottie.host/e25ee8d4-11e3-4304-902f-0f967732fe45/H9ctu6b7VQ.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="card card-2">
            <DotLottieReact
              src="https://lottie.host/7b7659c2-967e-4a24-af12-f0a5b91c4008/mS11Q8Lc8C.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="card card-3">
            <DotLottieReact
              src="https://lottie.host/f2470166-08ef-45b5-be74-2025d6d1e43c/7eKPClVsIQ.lottie"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
