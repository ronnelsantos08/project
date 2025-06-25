import '../styles/Projects.css';
import { useRef } from 'react';

// Props interface
interface ProjectBoxProps {
  title: string;
  lottieSrc: string;
  description: string;
  href?: string;
}

// ProjectBox component
function ProjectBox({ title, lottieSrc, description, href }: ProjectBoxProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const content = (
    <div
      className="project-box"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-content-row">
        <div className="media-container">
          <video
            ref={videoRef}
            src={lottieSrc}
            loop
            muted
            playsInline
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

// Main Projects component
export default function Projects() {
  return (
    <div className="app-container">
      <h1 className="main-title">Innovative Projects Showcase</h1>
      <div className="flex-box">
        <ProjectBox
          title="Mobile Website"
          lottieSrc="/videos/project1.webm"
          description="This website is specially made for mobile devices, ensuring a smooth, responsive, and user-friendly experience."
        />
        <ProjectBox
          title="Business Website"
          lottieSrc="/videos/project2.webm"
          description="A professional website designed for photo and video studios—showcasing creativity, quality, and visual storytelling."
          href="https://thejcstudios.onrender.com"
        />
        <ProjectBox
          title="Desktop and Mobile Responsive Website"
          lottieSrc="/videos/project3.webm"
          description="A fully responsive website designed for both desktop and mobile, enriched with smooth animations and interactive effects."
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
