import React from 'react';
import { useInView } from 'react-intersection-observer';
import { skillsData } from '../../data/skills';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="section" id="skills" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${inView ? 'visible' : ''}`}>
          Technical Skills
        </h2>
        
        <p className={`section-subtitle fade-in ${inView ? 'visible' : ''}`}>
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="skills-grid">
          {skillsData.map((skillCategory, index) => (
            <div 
              key={index}
              className={`skill-category fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.4 + (index * 0.1)}s` }}
            >
              <div className="skill-icon">
                <i className={skillCategory.icon}></i>
              </div>
              <h3 className="skill-title">{skillCategory.category}</h3>
              <div className="skill-list">
                {skillCategory.skills.map((skill, idx) => (
                  <span key={idx} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          padding: 2rem;
          text-align: center;
          transition: var(--transition);
        }

        .skill-category:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .skill-icon {
          font-size: 3rem;
          color: var(--accent-primary);
          margin-bottom: 1rem;
        }

        .skill-title {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .skill-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .skill-item {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          padding: 0.25rem 0.75rem;
          border-radius: 15px;
          font-size: 0.9rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Skills;