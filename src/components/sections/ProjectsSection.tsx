
import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">Featured Projects</h2>
            <p className="section-subtitle text-center mb-5">
              Explore my latest work and creative solutions
            </p>
          </div>
        </div>
        <div className="row g-4">
          {portfolioData.projects.map((project, index) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <div className="project-card h-100 hover-scale">
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.githubUrl} 
                        className="project-link github-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Code"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a 
                        href={project.liveUrl} 
                        className="project-link live-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live Demo"
                      >
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h5 className="project-title">{project.title}</h5>
                    <div className="project-category">
                      <span className="category-badge">Web App</span>
                    </div>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech-stack">
                    <h6 className="tech-stack-title">Tech Stack</h6>
                    <div className="tech-badges">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
