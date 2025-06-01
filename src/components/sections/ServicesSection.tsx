
import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: "fas fa-globe",
      title: "Website Development",
      description: "We build websites that take your brand global."
    },
    {
      icon: "fas fa-brain",
      title: "Software Solutions", 
      description: "We turn your problems into working software."
    },
    {
      icon: "fas fa-handshake",
      title: "Project Collaboration",
      description: "Open for exciting freelance & collab projects."
    },
    {
      icon: "fas fa-phone",
      title: "1:1 Consultation Call",
      description: "Book a direct call to kickstart your idea.",
      isConsultation: true
    }
  ];

  const handleBookNow = () => {
    const subject = "1:1 Consultation Request";
    const email = "selvavishnug25@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">Services</h2>
            <p className="section-subtitle text-center mb-5">
              Comprehensive solutions to bring your ideas to life
            </p>
          </div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                <i className={service.icon}></i>
              </div>
              <h4 className="service-title">{service.title}</h4>
              <p className="service-description">{service.description}</p>
              
              {service.isConsultation && (
                <button 
                  onClick={handleBookNow}
                  className="book-now-btn"
                >
                  <i className="fas fa-envelope me-2"></i>
                  Book Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
