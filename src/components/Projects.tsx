import '../styles/Projects.css';
import { useEffect, useRef } from 'react';

interface ProjectBoxProps {
  title: string;
  lottieSrc: string;
  description: React.ReactNode;
  href?: string;
}

// Moved ProjectBox ABOVE the Projects component
function ProjectBox({ title, lottieSrc, description, href }: ProjectBoxProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play();
        } else {
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  const content = (
    <div className="project-box">
      <div className="project-content-row">
        <div className="media-container">
          <video
            ref={videoRef}
            src={lottieSrc}
            loop
            muted
            playsInline
            preload="none"
            className="project-video"
          >
            Your browser does not support the video tag.
          </video>
          <div className="image-overlay"></div>
        </div>
        <div className="project-text-content">
          <h1 className="project-title">{title}</h1>
          <p className="project-description">{description}</p>
        </div>
      </div>
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      {content}
    </a>
  ) : (
    content
  );
}

// Now use ProjectBox inside the default exported component
export default function Projects() {
  return (
    <div className="app-container">
      <h1 className="main-title">Innovative Projects Showcase</h1>
      <div className="flex-box">
      <ProjectBox
  title="Business Website"
  lottieSrc="/videos/project2.webm"
  description={
    <>
    <h5>Professional website designed for photo and video studios Showcases creativity and quality. Focuses on visual storytelling</h5>
    <ul>
  <li>Core frontend tech (React, Vite, TypeScript)</li>
  <li>Content management (Contentful)</li>
  <li>APIs (Google Drive API, SMTP Email)</li>
  <li>UX & accessibility (Responsive Design, a11y)</li>
  <li>SEO and analytics (SEO Optimization, Google Analytics)</li>
  <li>Testing and version control (Unit Testing, Git)</li>
  <li>Deployment and automation (CI/CD, Vercel Serverless Functions)</li>
  <li>Performance optimization</li>
</ul>
    </>
  }
  href="https://thejcstudios.com"
/>
        <ProjectBox
          title="Mobile Website"
          lottieSrc="/videos/project1.webm"
          description="This website is specially made for mobile devices, ensuring a smooth, responsive, and user-friendly experience."
          href="https://jcwedding.onrender.com"
        />
        <ProjectBox
          title="Desktop and Mobile Responsive Website"
          lottieSrc="/videos/project3.webm"
          description="A fully responsive website designed for both desktop and mobile, enriched with smooth animations and interactive effects."
          href="https://jhobethdatiles.onrender.com"
        />
        <ProjectBox
          title="PDF convertion to Website"
          lottieSrc="/videos/project4.webm"
          description="Transform static documents into fully mobile responsive, interactive websites."
        />
      </div>
    </div>
  );
}
