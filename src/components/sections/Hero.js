import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const downloadResume = async () => {
    try {
      const response = await fetch('/assets/resume/Raghavendra_Kulkarni_Resume.pdf');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Raghavendra_Kulkarni_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback: try to open in new tab
        window.open('/assets/resume/Raghavendra_Kulkarni_Resume.pdf', '_blank');
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: try to open in new tab
      window.open('/assets/resume/Raghavendra_Kulkarni_Resume.pdf', '_blank');
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the actual navbar height
      const navbar = document.querySelector('.navbar');
      const navHeight = navbar ? navbar.offsetHeight : 80;
      
      // No extra padding - just navbar height
      const elementTop = element.offsetTop;
      
      window.scrollTo({
        top: elementTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className={`hero-avatar ${isVisible ? 'animate-in' : ''}`}>
          {/* Replace with your actual photo */}
          <img 
            src="/assets/images/profile.jpg" 
            alt="Raghavendra Kulkarni"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
            onError={(e) => {
              // Fallback to icon if image doesn't load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
            <i className="fas fa-user"></i>
          </div>
        </div>

        <h1 className={`hero-title ${isVisible ? 'animate-in delay-1' : ''}`}>
          Raghavendra Kulkarni
        </h1>

        <p className={`hero-subtitle ${isVisible ? 'animate-in delay-2' : ''}`}>
          Full Stack Developer & Computer Science Graduate Student
        </p>

        <p className={`hero-description ${isVisible ? 'animate-in delay-3' : ''}`}>
          Passionate about building scalable web applications and microservices. 
          Currently pursuing MS in Computer Science at Northeastern University.
        </p>

        <div className={`hero-cta ${isVisible ? 'animate-in delay-4' : ''}`}>
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            <i className="fas fa-code"></i>
            View My Work
          </button>
          <button 
            className="btn btn-secondary"
            onClick={downloadResume}
          >
            <i className="fas fa-file-alt"></i>
            Download Resume
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => scrollToSection('contact')}
          >
            <i className="fas fa-envelope"></i>
            Get In Touch
          </button>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: radial-gradient(ellipse at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
          scroll-margin-top: 100px;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 30px;
          padding: 0 2rem;
          text-align: center;
        }

        .hero-avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          background: var(--accent-gradient);
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: var(--text-primary);
          box-shadow: var(--shadow-heavy);
          animation: float 6s ease-in-out infinite;
          overflow: hidden;
          opacity: 0;
          transform: scale(0.8);
          transition: all 0.6s ease-out;
        }

        .hero-avatar.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1); }
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 1rem;
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
        .delay-4 { transition-delay: 0.8s; }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;