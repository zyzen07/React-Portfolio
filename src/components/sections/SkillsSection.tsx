
import React from 'react';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: 'fas fa-palette',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E' },
        { name: 'React JS', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', color: '#7952B3' }
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'fas fa-server',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1' },
        { name: 'Python', icon: 'fab fa-python', color: '#3776AB' },
        { name: 'C', icon: 'fas fa-code', color: '#00599C' }
      ]
    },
    {
      title: 'Network & Infrastructure',
      icon: 'fas fa-network-wired',
      skills: [
        { name: 'Cisco Packet Tracer', icon: 'fas fa-network-wired', color: '#1BA0D7' },
        { name: 'GNS3', icon: 'fas fa-sitemap', color: '#FF6B35' },
        { name: 'Computer Networks', icon: 'fas fa-wifi', color: '#4CAF50' },
        { name: 'Operating Systems', icon: 'fas fa-desktop', color: '#9C27B0' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      skills: [
        { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900' },
        { name: 'DevOps', icon: 'fas fa-cogs', color: '#326CE5' }
      ]
    },
    {
      title: 'Design & Media',
      icon: 'fas fa-paint-brush',
      skills: [
        { name: 'Figma', icon: 'fab fa-figma', color: '#F24E1E' },
        { name: 'Canva', icon: 'fas fa-palette', color: '#00C4CC' },
        { name: 'Video Editing', icon: 'fas fa-video', color: '#FF4458' }
      ]
    },
    {
      title: 'Computer Science',
      icon: 'fas fa-graduation-cap',
      skills: [
        { name: 'Data Structures', icon: 'fas fa-project-diagram', color: '#6C5CE7' },
        { name: 'Algorithms', icon: 'fas fa-route', color: '#A29BFE' },
        { name: 'System Design', icon: 'fas fa-drafting-compass', color: '#74B9FF' }
      ]
    }
  ];

  const certifications = [
    { title: 'CCNA', issuer: 'Cisco', logo: 'fab fa-cisco', color: '#1BA0D7' },
    { title: 'Git for Beginners', issuer: 'Udemy', logo: 'fab fa-git-alt', color: '#F05032' },
    { title: 'CNIP', issuer: 'NPTEL', logo: 'fas fa-certificate', color: '#4CAF50' },
    { title: 'Cloud Computing', issuer: 'Simplilearn', logo: 'fas fa-cloud', color: '#FF9900' },
    { title: 'Digital Marketing Fundamentals', issuer: 'Google', logo: 'fab fa-google', color: '#4285F4' },
    { title: 'DevOps Tools Introduction', issuer: 'Simplilearn', logo: 'fas fa-tools', color: '#326CE5' },
    { title: 'Getting Started with AWS', issuer: 'Simplilearn', logo: 'fab fa-aws', color: '#FF9900' },
    { title: 'Python Essentials 1 & 2', issuer: 'Cisco', logo: 'fab fa-python', color: '#3776AB' }
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">Skills & Expertise</h2>
            <p className="section-subtitle text-center mb-5">
              Technical skills organized by domain expertise
            </p>
          </div>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories mb-5">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category mb-5">
              <div className="category-header text-center mb-4">
                <div className="category-icon">
                  <i className={category.icon}></i>
                </div>
                <h4 className="category-title">{category.title}</h4>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-enhanced">
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <i className={skill.icon}></i>
                    </div>
                    <h6 className="skill-name">{skill.name}</h6>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="certifications-header text-center mb-5">
              <div className="section-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="section-title">Professional Certifications</h3>
              <p className="section-subtitle">Validated expertise through industry-recognized certifications</p>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon" style={{ color: cert.color }}>
                    <i className={cert.logo}></i>
                  </div>
                  <div className="certification-content">
                    <h6 className="certification-title">{cert.title}</h6>
                    <small className="certification-issuer">{cert.issuer}</small>
                  </div>
                  <div className="certification-badge">
                    <i className="fas fa-check-circle"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
