// src/components/Navbar.tsx
import React, { useState } from 'react';
import '../styles/Navbar.css';

// Define the interface for the props that Navbar component expects
interface NavbarProps {
  scrollToSection: (id: string) => void; // A function that takes a string ID and returns void
}

// Update the Navbar functional component to accept NavbarProps
const Navbar: React.FC<NavbarProps> = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation link clicks
  const handleNavLinkClick = (id: string) => {
    scrollToSection(id); // Call the passed-in scroll function
    setIsMenuOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav>
      {/* Logo link - now also scrolls to the 'home' section */}
      <a href="#home" className="logo" onClick={() => handleNavLinkClick('home')}>
        <div className='logocontainer'>
          <img
            src="/logo1.png" // <--- IMPORTANT: Replace with the actual path to your logo image
            alt="RSdev Logo"
            style={{ height: '45px', width: 'auto' }}
          />
          <div className='logotext'>
            <h1>WebWorks</h1>
            <p>Web & Digital Solutions</p>
          </div>
        </div>
      </a>

      {/* Hamburger Menu Icon for Mobile */}
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>

      {/* Nav links - conditionally apply 'open' class */}
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Each link now calls handleNavLinkClick with the target section's ID */}
        <a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a>
        <a href="#about-me" onClick={() => handleNavLinkClick('about-me')}>About Me</a>
        <a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a>
        <a href="#services" onClick={() => handleNavLinkClick('services')}>Services</a>
        <a href="#contact-us" onClick={() => handleNavLinkClick('contact-us')}>Contact Us</a>
      </div>

      <div className="auth-buttons">
        <a
          href="https://m.me/ronnelsantos08" // Replace with actual username
          target="_blank"
          rel="noopener noreferrer"
          className="message"
        >
          Message Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
