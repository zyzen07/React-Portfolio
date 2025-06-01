import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mnnvaevv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-header text-center mb-5">
              <div className="section-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Ready to start your next project? Let's create something amazing together!
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-wrapper">
              <div className="row g-4">
                <div className="col-lg-5">
                  <div className="contact-info">
                    <h4 className="contact-info-title mb-4">Let's Connect</h4>
                    <p className="contact-description mb-4">
                      I'm always interested in hearing about new opportunities and exciting projects.
                    </p>

                    <div className="contact-details">
                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-text">
                          <h6>Email</h6>
                          <span>{portfolioData.personal.email}</span>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-text">
                          <h6>Phone</h6>
                          <span>{portfolioData.personal.phone}</span>
                        </div>
                      </div>

                      <div className="contact-item">
                        <div className="contact-icon">
                          <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-text">
                          <h6>Location</h6>
                          <span>Available for Remote Work</span>
                        </div>
                      </div>
                    </div>

                    <div className="social-links-enhanced mt-4">
                      <h6 className="social-title">Follow Me</h6>
                      <div className="social-icons">
                        {portfolioData.social.map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            className="social-link-enhanced"
                            target="_blank"
                            rel="noopener noreferrer"
                            title={social.name}
                          >
                            <i className={social.icon}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7">
                  <div className="contact-form-wrapper">
                    <form onSubmit={handleSubmit} className="contact-form-enhanced">
                      <div className="form-group-enhanced">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control-enhanced"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group-enhanced">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control-enhanced"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group-enhanced">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="form-control-enhanced"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="form-group-enhanced">
                        <label htmlFor="message">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="form-control-enhanced"
                          placeholder="Tell me about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <button type="submit" className="btn-send-message">
                        <i className="fas fa-paper-plane me-2"></i>
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
