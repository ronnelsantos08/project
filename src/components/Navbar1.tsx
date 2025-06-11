// src/components/Navbar.tsx
import React, { useState } from 'react'; // Import useState
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <a href="#" className="logo">
        <div className='logocontainer'>
          <img
            src="/logo.png" // <--- IMPORTANT: Replace with the actual path to your logo image
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
        <a href="#" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>About Us</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
      </div>

      <div className="auth-buttons">
        <button className="signup">Message Us</button>
      </div>
    </nav>
  );
};

export default Navbar;