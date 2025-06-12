import '../styles/Footer.css'

// The main App component will render the Footer component.
// In a real application, you'd typically place this at the bottom of your main layout.
export default function Footer() {
  return (
    // The main container for the application, taking on the body styles
    <div style={{
      fontFamily: "'Poppins', sans-serif",
      display: 'flex',
      flexDirection: 'column', // Changed to column to stack content and footer
      alignItems: 'center',
      justifyContent: 'flex-end', // Aligns content to the top, footer to the bottom
      backgroundColor: '#0A0A0A', // Dark background for futuristic feel
      color: '#E0E0E0', // Light gray text color
      position: 'relative',
    }}>
      {/* Font Awesome CSS Link - Moved here for reliable loading */}
      {/* This link ensures that Font Awesome icons are rendered correctly. */}
      {/* In a real application, this would typically be in the <head> section of your index.html. */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />

      {/* Main content to make the page scrollable and reveal the footer */}
  

      {/* The new Footer Component */}
      <NewFooter />
    </div>
  );
}

/**
 * NewFooter Component
 *
 * This component renders a modern, futuristic, and business-style footer.
 * It features a logo, navigation links, social media icons, and a copyright notice.
 * All styling is embedded using plain CSS to provide a cohesive and responsive design.
 */
function NewFooter() {
  return (
    <footer className="footer">
      {/* Embedded CSS for the Footer component */}
     

      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            WebWorks
          </div>
          <div className="footer-links">
            <ul className="footer-menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/ronnelsantos08" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li>
                <a href="https://m.me/ronnelsantos08" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-messenger"></i>
                </a>
                </li>

              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li><a href="www.linkedin.com/in/ronnel-santos-16aba8280" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 WebWorks. All rights reserved.</p>
        </div>
      </div>
      {/* Removed the backdrop div as its effects are now integrated or changed */}
    </footer>
  );
}
