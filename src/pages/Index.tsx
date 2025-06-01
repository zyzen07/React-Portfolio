import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import AnimatedBackground from '../components/AnimatedBackground';
import ThemeToggle from '../components/ThemeToggle';
import Navigation from '../components/Navigation';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import GallerySection from '../components/sections/GallerySection';
import SkillsSection from '../components/sections/SkillsSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <AnimatedBackground />
        <ThemeToggle />
        <Navigation />

        <main>
          <section id="home">
            <HeroSection />
          </section>

          <AboutSection />
          <ProjectsSection />
          <AchievementsSection />
          <GallerySection />
          <SkillsSection />
          <ServicesSection />
          <ContactSection />
        </main>

        <footer className="enhanced-footer py-5">
          <div className="container">
            <div className="footer-content">
              <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="footer-section">
                    <h5 className="footer-title">Selva Vishnu G</h5>
                    <p className="footer-description">
                      Full Stack Developer passionate about creating innovative digital solutions and building the future of technology.
                    </p>
                    <div className="footer-social">
                      <a
                        href="https://www.linkedin.com/in/selvavishnug"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                      <a
                        href="https://github.com/zyzen07"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        href="https://leetcode.com/u/Selvavishnug_07/"
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fas fa-code"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/zyzen07?igsh=MTJkZTV0ejMwcTlzdw=="
                        className="footer-social-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-2 col-md-6 mb-4">
                  <div className="footer-section">
                    <h6 className="footer-subtitle">Quick Links</h6>
                    <ul className="footer-links">
                      <li><a href="#home">Home</a></li>
                      <li><a href="#about">About</a></li>
                      <li><a href="#projects">Projects</a></li>
                      <li><a href="#skills">Skills</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="footer-section">
                    <h6 className="footer-subtitle">Services</h6>
                    <ul className="footer-links">
                      <li><a href="#">Web Development</a></li>
                      <li><a href="#">Career Guidance</a></li>
                      <li><a href="#">Software Solution</a></li>
                      <li><a href="#">Open for collaboration</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="footer-section">
                    <h6 className="footer-subtitle">Contact Info</h6>
                    <div className="footer-contact">
                      <p><i className="fas fa-envelope me-2"></i>selvavishnug25@gmail.com</p>
                      <p><i className="fas fa-phone me-2"></i>+91 6380209091</p>
                      <p><i className="fas fa-map-marker-alt me-2"></i>Available Worldwide</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-bottom">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <p className="footer-copyright">
                      &copy; 2024 Selva Vishnu G. Made with <i className="fas fa-heart text-danger"></i> using React & Bootstrap
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="footer-badges">
                      <span className="footer-badge">
                        <i className="fab fa-react me-1"></i>React
                      </span>
                      <span className="footer-badge">
                        <i className="fab fa-bootstrap me-1"></i>Bootstrap
                      </span>
                      <span className="footer-badge">
                        <i className="fas fa-code me-1"></i>TypeScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default Index;
