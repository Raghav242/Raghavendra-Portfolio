import React from 'react';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../../data/projects';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${inView ? 'visible' : ''}`}>
          Featured Projects
        </h2>
        
        <p className={`section-subtitle fade-in ${inView ? 'visible' : ''}`}>
          A selection of projects that showcase my technical skills and problem-solving abilities
        </p>
        
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className={`project-card fade-in ${inView ? 'visible' : ''}`}
              style={{ transitionDelay: `${0.4 + (index * 0.2)}s` }}
            >
              <div className="project-image">
                <i className={project.icon}></i>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.githubUrl} 
                    className="project-link" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="project-link" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          overflow: hidden;
          transition: var(--transition);
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-medium);
        }

        .project-image {
          height: 160px;
          background: var(--accent-gradient);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
        }

        .project-image i {
          z-index: 2;
          position: relative;
        }

        .project-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(0,0,0,0.2), rgba(0,0,0,0.1));
          z-index: 1;
        }

        .project-content {
          padding: 1.5rem;
        }

        .project-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.8rem;
          line-height: 1.3;
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1rem;
          font-size: 0.85rem;
          line-height: 1.4;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background: rgba(59, 130, 246, 0.1);
          color: var(--accent-primary);
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          font-size: 0.7rem;
          border: 1px solid rgba(59, 130, 246, 0.2);
          font-weight: 500;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--accent-primary);
          text-decoration: none;
          font-weight: 500;
          transition: var(--transition);
          font-size: 0.85rem;
        }

        .project-link:hover {
          color: var(--accent-secondary);
        }

        .project-link i {
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .project-content {
            padding: 1.2rem;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
          
          .project-description {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;