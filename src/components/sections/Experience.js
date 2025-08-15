import React, { useState } from 'react';
import { experienceData } from '../../data/experience';

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === experienceData.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? experienceData.length - 1 : currentIndex - 1);
  };

  const currentExp = experienceData[currentIndex];

  return (
    <section id="experience" style={{ padding: '4rem 0', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem', 
          textAlign: 'center',
          color: 'var(--text-primary)',
          marginTop: '1rem'
        }}>
          Work Experience
        </h2>
        
        <p style={{
          color: 'var(--text-secondary)',
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          fontSize: '1.1rem'
        }}>
          My professional journey in full-stack development and software engineering
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
          width: '100%',
          position: 'relative'
        }}>
          <button 
            onClick={prevSlide}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              fontSize: '1.4rem',
              flexShrink: 0,
              boxShadow: 'var(--shadow-light)',
              transition: 'var(--transition)',
              position: 'absolute',
              left: '-80px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius)',
            padding: '2rem',
            position: 'relative',
            flex: 1,
            width: '100%',
            borderLeft: '4px solid #3b82f6'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '1.2rem',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div>
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.2rem',
                  lineHeight: 1.2
                }}>
                  {currentExp.title}
                </h3>
                <h4 style={{
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  margin: 0,
                  fontSize: '0.9rem',
                  lineHeight: 1.2
                }}>
                  {currentExp.company}
                </h4>
              </div>
              <div style={{
                background: 'var(--bg-secondary)',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontWeight: 600,
                whiteSpace: 'nowrap'
              }}>
                {currentExp.duration}
              </div>
            </div>
            
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1rem',
              fontSize: '0.85rem',
              lineHeight: 1.4
            }}>
              {currentExp.description}
            </p>
            
            <div style={{ marginBottom: '1rem' }}>
              {currentExp.achievements.map((achievement, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem',
                  marginBottom: '0.6rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.3
                }}>
                  <i className="fas fa-play" style={{
                    color: 'var(--accent-primary)',
                    fontSize: '0.6rem',
                    marginTop: '0.3rem',
                    flexShrink: 0
                  }}></i>
                  <span style={{ fontSize: '0.8rem' }}>{achievement}</span>
                </div>
              ))}
            </div>
            
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '0.8rem'
            }}>
              {currentExp.technologies.map((tech, idx) => (
                <span key={idx} style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: 'var(--accent-primary)',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '12px',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  border: '1px solid rgba(59, 130, 246, 0.2)'
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <button 
            onClick={nextSlide}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '50%',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-primary)',
              cursor: 'pointer',
              fontSize: '1.4rem',
              flexShrink: 0,
              boxShadow: 'var(--shadow-light)',
              transition: 'var(--transition)',
              position: 'absolute',
              right: '-80px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;