import '../styles/Projects.css'
// Define an interface for the props of the ProjectBox component
interface ProjectBoxProps {
  title: string;
  lottieSrc: string; // Renamed from videoSrc to lottieSrc as per your request
  description: string;
}

// The main App component that sets up the overall page structure
// and renders the ProjectBox.
export default function Projects() {
  return (
    <div className="app-container">
      {/* Main Page Title */}
      <h1 className="main-title">
        Innovative Projects Showcase
      </h1>

      {/* Example usage of the ProjectBox component with a WebM video */}
      <ProjectBox
        title="Mobile Website"
        lottieSrc="/videos/project1.webm" // Using a WebM video now
        description="This website is specially made for mobile devices, ensuring a smooth, responsive, and user-friendly experience."
      />
       <ProjectBox
        title="Business Website"
        lottieSrc="/videos/project2.webm" // Using a WebM video now
        description="A professional website designed for photo and video studios—showcasing creativity, quality, and visual storytelling."
      />
        <ProjectBox
        title="Desktop and Mobile Responsive Website"
        lottieSrc="/videos/project3.webm" // Using a WebM video now
        description="A fully responsive website designed for both desktop and mobile, enriched with smooth animations and interactive effects."
      />

      {/* You can add more ProjectBox instances here if needed */}
      {/*
      <ProjectBox
        title="Interactive 3D Model"
        lottieSrc="/videos/project2.webm" // Another example WebM URL
        description="Explore complex designs with an interactive 3D model, allowing users to rotate, zoom, and inspect every detail. Ideal for engineering, architecture, and product visualization."
      />
      */}
    </div>
  );
}

/**
 * ProjectBox Component
 *
 * A reusable React component that displays a project box with a title, a WebM video, and description.
 * This version uses plain CSS to achieve a futuristic and business-oriented design.
 *
 * @param {ProjectBoxProps} props - The component's props, explicitly typed.
 */
function ProjectBox({ title, lottieSrc, description }: ProjectBoxProps) {
  return (
    <div className="project-box">
      {/* Flex container for content, arranged in a row on larger screens, stacked on small screens */}
      <div className="project-content-row">
        {/* Media Container (for video) */}
        <div className="media-container">
          {/* Video element for WebM */}
          <video
            src={lottieSrc}
            autoPlay
            loop
            muted
            playsInline // Essential for autoplay on mobile browsers
            className="project-video"
            // You might want to add a fallback image here if the video doesn't load
            // <source src={lottieSrc} type="video/webm" />
            // <img src="fallback-image.jpg" alt="Video fallback" />
          >
            Your browser does not support the video tag.
          </video>

          {/* Subtle overlay for futuristic look */}
          <div className="image-overlay"></div>
        </div>

        {/* Content Area: Title and Description */}
        <div className="project-text-content">
          {/* Project Title */}
          <h1 className="project-title">
            {title}
          </h1>
          {/* Project Description */}
          <p className="project-description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}