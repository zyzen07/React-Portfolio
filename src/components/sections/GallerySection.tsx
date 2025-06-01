
import React from 'react';
import { portfolioData } from '../../data/portfolioData';

const GallerySection: React.FC = () => {
  return (
    <section id="gallery" className="gallery-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title text-center mb-5">Activity Gallery</h2>
            <p className="section-subtitle text-center mb-5">
              Moments that define my journey
            </p>
          </div>
        </div>
        
        <div className="gallery-grid">
          {portfolioData.gallery.map((item, index) => (
            <div key={item.id} className={`gallery-item-enhanced item-${index + 1}`}>
              <div className="gallery-card">
                <div className="gallery-image-wrapper">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="gallery-image"
                  />
                  <div className="gallery-overlay-enhanced">
                    <div className="gallery-content-enhanced">
                      <div className="category-tag">{item.category}</div>
                      <h5 className="gallery-title-enhanced">{item.title}</h5>
                      <p className="gallery-description-enhanced">{item.description}</p>
                      <div className="gallery-action">
                        <a 
                          href="#" 
                          className="view-btn-link"
                          onClick={(e) => {
                            e.preventDefault();
                            // Add your navigation logic here
                            console.log('Navigate to:', item.title);
                          }}
                        >
                          <i className="fas fa-eye me-2"></i>View
                        </a>
                      </div>
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

export default GallerySection;
