import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Built' },
    { number: '40%', label: 'Deployment Efficiency Gain' }
  ];

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${inView ? 'visible' : ''}`}>
          About Me
        </h2>
        
        <p className={`section-subtitle fade-in ${inView ? 'visible' : ''}`}>
          A passionate full-stack developer with experience in building enterprise-level applications
        </p>
        
        <div className="about-grid">
          <div className={`about-image fade-in ${inView ? 'visible' : ''}`}>
            <div className="about-photo">
              {/* Replace with your actual photo */}
              <img 
                src="/assets/images/profile-about.jpg" 
                alt="Raghavendra Kulkarni"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
                onError={(e) => {
                  // Fallback to icon if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div style={{ 
                display: 'none', 
                width: '100%', 
                height: '100%', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '4rem',
                background: 'var(--accent-gradient)',
                borderRadius: '20px',
                color: 'white'
              }}>
                <i className="fas fa-user-circle"></i>
              </div>
            </div>
          </div>
          
          <div className={`about-content fade-in ${inView ? 'visible' : ''}`}>
            <h3>Full Stack Developer & Computer Science Student</h3>
            <p>
              I'm currently pursuing my Master's in Computer Science at Northeastern University while bringing 
              2+ years of professional experience from Cognizant Technology Solutions, where I worked on 
              SAP's Service Provider Cockpit and enterprise microservices.
            </p>
            <p>
              My expertise spans from React frontends to Spring Boot backends, with hands-on experience in 
              containerization, cloud deployment, and DevOps practices. I'm passionate about building 
              scalable solutions that make a real impact.
            </p>
            
            <div className="about-stats">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`stat fade-in ${inView ? 'visible' : ''}`}
                  style={{ transitionDelay: `${0.8 + (index * 0.1)}s` }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .about-image::before {
          content: '';
          position: absolute;
          inset: -20px;
          background: var(--accent-gradient);
          border-radius: 20px;
          z-index: -1;
          opacity: 0.3;
          filter: blur(20px);
        }

        .about-photo {
          width: 100%;
          max-width: 300px;
          height: 400px;
          border-radius: 20px;
          box-shadow: var(--shadow-heavy);
          overflow: hidden;
        }

        .about-content h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .about-content p {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .stat-label {
          color: var(--text-muted);
          font-size: 0.9rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default About;