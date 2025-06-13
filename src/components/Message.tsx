import '../styles/Message.css'

// This is the main App component that demonstrates the MessageMe component.
// In your actual application, you would integrate MessageMe where you want your contact section.
export default function Message() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #E0E0E0, #F8F8F8)', /* Lighter background gradient */
      color: '#333333', /* Darker text for contrast on light background */
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'Inter, sans-serif',
    }}>
      {/* A placeholder for your page content */}
      <h1 style={{
        fontSize: '3rem',
        fontWeight: '800',
        background: 'linear-gradient(to right, #007BFF, #6A1B9A)', /* Vibrant blue to purple gradient for text */
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Get in Touch
      </h1>

      {/* Render the MessageMe component */}
      <MessageMe />

    
    </div>
  );
}

/**
 * MessageMe Component
 *
 * A reusable React component that provides a call to action for users
 * to send a direct message via their default email client.
 * It's styled with a futuristic, business-oriented design for a light theme.
 */
function MessageMe() {
  // Replace with your desired email address and subject
  const recipientEmail = 'ronnel.santos08@gmail.com';
  const defaultSubject = 'Inquiry from your website';
  const defaultBody = 'Hello,\n\nI would like to discuss...';

  // Function to construct the mailto link and open it
  const handleSendMessage = () => {
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(defaultSubject)}&body=${encodeURIComponent(defaultBody)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="message-me-card">
     
      <h2>Direct Message</h2>
      <p>
        Have a project in mind or a question? Send me a message directly via email.
        I'm ready to hear from you.
      </p>
      <button className="message-me-button" onClick={handleSendMessage}>
        Message Me
      </button>
    </div>
  );
}
