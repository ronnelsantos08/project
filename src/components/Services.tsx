import '../styles/Services.css';


// Main App component to demonstrate the ServiceBackground component
export default function Services() {
  return (
    <>
      {/* Global styles using standard CSS and incorporating variables */}
     

      {/* Main content div - Tailwind classes for global font and background are removed from here as they are now in body style */}
      <div className="min-h-screen">
        {/* The ServiceBackground component is now the primary content */}
        <ServiceBackground />
      </div>
    </>
  );
}

// ServiceBackground Component
function ServiceBackground() {
  const services = [
    {
      title: "Digital Invitation",
      description:
        "Say goodbye to paper and hello to elegance with my digital invitation. A modern, eco-friendly way to share your special moment. Whether you're planning a wedding, birthday, or any meaningful celebration, my beautifully designed online invite makes it easy to impress a guest, share event details, and collect RSVPs in one seamless experience. Simple to send, stunning to receive — your event begins with a click.",
    },
    {
      title: "Personal Website",
      description:
        "Bring your story to life online with a custom personal website designed just for you. Whether you're building a brand, showcasing a portfolio, or sharing your journey, I craft a sleek, responsive, and memorable site that reflects who you are — with zero hassle and 100% personality.",
    },
    {
      title: "Business Website",
      description:
        "Elevate your business with a powerful, custom-built website designed to attract a customer, build credibility, and drive growth. From sleek design to seamless user experience, I create a site that showcases your brand’s strengths and helps you stand out in a competitive market — making your online presence work as hard as you do.",
    },
    {
      title: "Digital Product",
      description:
        "Build a cohesive and striking brand presence with expertly crafted digital product — from a custom logo and social media graphic to website visuals, digital brochures, and marketing asset. Whether launching a new venture or elevating your current brand, my creative designs combine artistry and strategy to deliver professional, eye-catching digital content that resonates across every platform and drives real impact.",
    },
    {
      title: "Freelancing Service",
      description:
        "Unlock the power of expert freelancing service tailored to your needs — from web design and digital marketing to content creation and branding. Whether you’re a startup or an established business, I deliver a flexible, reliable, and personalized solution that helps you achieve your goal with quality and efficiency, all while providing a seamless collaboration experience.",
    },
  ];
  
  return (
    <section className="service-section">
      <div className="custom-container"> {/* Using custom-container class */}
        <h2>My Core Services</h2> {/* No more Tailwind classes here, styled via custom CSS */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-box" /* Custom class for styling */
            >
              <h1>
                {service.title}
              </h1>
              <p>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
