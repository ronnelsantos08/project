// src/App.tsx
import React from 'react';
import '../styles/Hero.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Hero: React.FC = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <h1>Empowering Your Business<br/>Through Intelligent Web Solutions.</h1>
          <p>From captivating logos to robust web applications and digital invitations, I deliver comprehensive digital solutions designed to amplify your brand, streamline operations, and connect you with your audience effectively. Your vision, realized digitally.</p>
          <div className="cta-group">
            <button className="cta-button">Start Now</button>
            <button className="cta-button-secondary">Projects</button>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">Web Invitation</span>
              <span className="stat-label">Create digital product to enhance user engagement and provide seamless experiences</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Personal Websites</span>
              <span className="stat-label">Showcase your unique story, portfolio, or brand with a beautifully crafted online presence. From concept to launch, I build custom personal websites that make a lasting impression.</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">Business Websites</span>
              <span className="stat-label">Establish a powerful online presence that drives sales, builds credibility, and connects with your target audience. I design and develop professional, high-performing websites tailored to your business goals</span>
            </div>
          </div>
        </div>

        <div className="hero-graphics">
          <div className="gradient-orb"></div>
          <div className="floating-cards">
            <div className="card card-1"><DotLottieReact
      src="https://lottie.host/e25ee8d4-11e3-4304-902f-0f967732fe45/H9ctu6b7VQ.lottie"
      loop
      autoplay
    /></div>
            <div className="card card-2"><DotLottieReact
      src="https://lottie.host/7b7659c2-967e-4a24-af12-f0a5b91c4008/mS11Q8Lc8C.lottie"
      loop
      autoplay
    /></div>
            <div className="card card-3"><DotLottieReact
      src="https://lottie.host/f2470166-08ef-45b5-be74-2025d6d1e43c/7eKPClVsIQ.lottie"
      loop
      autoplay
    /></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;