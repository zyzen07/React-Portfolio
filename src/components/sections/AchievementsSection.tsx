
import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="achievements-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">Achievements & Milestones</h2>
            <p className="section-subtitle text-center mb-5">
              A journey of continuous learning and growth
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="enhanced-timeline">
              <div className="timeline-line"></div>
              {portfolioData.achievements.map((achievement, index) => (
                <div key={index} className={`timeline-item-enhanced ${index % 2 === 0 ? 'left' : 'right'}`}>
                  <div className="timeline-content-enhanced">
                    <div className="timeline-icon-enhanced">
                      <i className={achievement.icon}></i>
                      <div className="icon-ring"></div>
                      <div className="icon-pulse"></div>
                    </div>
                    <div className="timeline-body-enhanced">
                      <div className="timeline-header">
                        <div className="timeline-year-enhanced">{achievement.year}</div>
                        <span className="achievement-category-enhanced">{achievement.category}</span>
                      </div>
                      <h4 className="timeline-title-enhanced">{achievement.title}</h4>
                      <p className="timeline-description-enhanced">{achievement.description}</p>
                    </div>
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

export default AchievementsSection;
