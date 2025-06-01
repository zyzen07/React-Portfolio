
import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">About Me</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="about-content">
              <p className="lead mb-4">
                {portfolioData.personal.about}
              </p>
              <div className="about-highlights mb-4">
                <div className="highlight-item">
                  <i className="fas fa-code text-primary me-3"></i>
                  <span><strong>Full Stack Developer</strong> - Building end-to-end web applications</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-network-wired text-primary me-3"></i>
                  <span><strong>Network Engineer</strong> - Designing and managing network infrastructure</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-robot text-primary me-3"></i>
                  <span><strong>AI/ML Enthusiast</strong> - Exploring artificial intelligence solutions</span>
                </div>
              </div>
              <div className="about-stats row mb-4">
                <div className="col-md-4 col-6 text-center mb-3">
                  <div className="stat-item">
                    <h3 className="stat-number text-primary">16+</h3>
                    <p className="stat-label">Projects Completed</p>
                  </div>
                </div>
                <div className="col-md-4 col-6 text-center mb-3">
                  <div className="stat-item">
                    <h3 className="stat-number text-primary">1</h3>
                    <p className="stat-label">International Hackathon Finalist</p>
                  </div>
                </div>
                <div className="col-md-4 col-6 text-center mb-3">
                  <div className="stat-item">
                    <h3 className="stat-number text-primary">2</h3>
                    <p className="stat-label">Startup project</p>
                  </div>
                </div>
              </div>
              <a 
                href={portfolioData.personal.resumeUrl}
                className="btn btn-primary btn-lg hover-scale"
                download
              >
                <i className="fas fa-download me-2"></i>
                Download Resume
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="about-visual">
              <div className="skills-circle">
                <div className="skill-ring ring-1">
                  <span className="skill-text">Frontend</span>
                </div>
                <div className="skill-ring ring-2">
                  <span className="skill-text">Backend</span>
                </div>
                <div className="skill-ring ring-3">
                  <span className="skill-text">Networks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
