
import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolioData';

const HeroSection: React.FC = () => {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTaglineIndex((prev) => 
        (prev + 1) % portfolioData.personal.taglines.length
      );
    }, 3000);

    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => 
        (prev + 1) % portfolioData.personal.titles.length
      );
    }, 4000);

    return () => {
      clearInterval(taglineInterval);
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <section className="hero-section min-vh-100 d-flex align-items-center position-relative overflow-hidden">
      <div className="hero-background-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="hero-content">
              <div className="hero-badge mb-3">
                <span className="badge bg-primary-gradient px-4 py-2 rounded-pill hero-badge-dark">
                  <i className="fas fa-code me-2"></i>Full Stack Developer
                </span>
              </div>
              <h1 className="hero-name mb-3 animate-fade-in hero-name-dark">
                <span className="text-gradient">{portfolioData.personal.name}</span>
              </h1>
              <div className="hero-title mb-4" style={{ height: '50px', overflow: 'hidden' }}>
                <h2 className="h3 mb-0 animate-slide-up text-primary hero-title-dark">
                  {portfolioData.personal.titles[currentTitleIndex]}
                </h2>
              </div>
              <div className="hero-tagline mb-4" style={{ height: '40px', overflow: 'hidden' }}>
                <p className="lead animate-fade-in text-muted hero-tagline-dark">
                  {portfolioData.personal.taglines[currentTaglineIndex]}
                </p>
              </div>
              <div className="hero-cta">
                <a 
                  href="#projects" 
                  className="btn btn-primary btn-lg me-3 mb-3 hover-scale hero-btn hero-btn-dark"
                >
                  <i className="fas fa-rocket me-2"></i>View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-outline-primary btn-lg mb-3 hover-scale hero-btn hero-btn-outline-dark"
                >
                  <i className="fas fa-envelope me-2"></i>Get In Touch
                </a>
              </div>
              <div className="hero-stats mt-4">
                <div className="row">
                  <div className="col-4 text-center">
                    <div className="stat-box hero-stat-dark">
                      <h4 className="stat-number text-primary hero-stat-number-dark">20+</h4>
                      <p className="stat-text hero-stat-text-dark">Projects</p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="stat-box hero-stat-dark">
                      <h4 className="stat-number text-primary hero-stat-number-dark">07+</h4>
                      <p className="stat-text hero-stat-text-dark">Hackathons</p>
                    </div>
                  </div>
                  <div className="col-4 text-center">
                    <div className="stat-box hero-stat-dark">
                      <h4 className="stat-number text-primary hero-stat-number-dark">01</h4>
                      <p className="stat-text hero-stat-text-dark">Govt Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="hero-image text-center">
              <div className="profile-wrapper floating-animation">
                <div className="profile-background"></div>
                <img 
                  src="/images/profile.jpg" 
                  alt="Selva Vishnu G"
                  className="profile-image img-fluid rounded-circle"
                />
                <div className="profile-ring"></div>
                <div className="profile-dots">
                  <div className="dot dot-1"></div>
                  <div className="dot dot-2"></div>
                  <div className="dot dot-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
