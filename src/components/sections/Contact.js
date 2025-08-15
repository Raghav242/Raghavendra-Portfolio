import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:kulkarni.ragh@northeastern.edu?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'kulkarni.ragh@northeastern.edu',
      href: 'mailto:kulkarni.ragh@northeastern.edu'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '+1 (857) 654-2114',
      href: 'tel:+18576542114'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'Boston, MA, USA',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      href: 'https://github.com/Raghav242',
      label: 'GitHub'
    },
    {
      icon: 'fab fa-linkedin',
      href: 'https://www.linkedin.com/in/raghavendra-kulkarni-599815185/',
      label: 'LinkedIn'
    },
    {
      icon: 'fas fa-file-alt',
      href: '/assets/resume/Raghavendra_Kulkarni_Resume.pdf',
      label: 'Resume',
      download: 'Raghavendra_Kulkarni_Resume.pdf'
    }
  ];

  return (
    <section className="section" id="contact" ref={ref}>
      <div className="container">
        <h2 className={`section-title fade-in ${inView ? 'visible' : ''}`}>
          Let's Work Together
        </h2>
        
        <p className={`section-subtitle fade-in ${inView ? 'visible' : ''}`}>
          Ready to collaborate on your next project? Let's create something amazing.
        </p>
        
        <div className="contact-grid">
          <div className={`contact-info fade-in ${inView ? 'visible' : ''}`}>
            <h3>Get In Touch</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and software development.
            </p>
            
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <div key={index} className="contact-method">
                  <i className={method.icon}></i>
                  {method.href ? (
                    <a href={method.href}>{method.value}</a>
                  ) : (
                    <span>{method.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="social-link" 
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  download={link.download || undefined}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>

          <form 
            className={`contact-form fade-in ${inView ? 'visible' : ''}`}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 4rem;
        }

        .contact-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-info p {
          color: var(--text-secondary);
          margin-bottom: 2rem;
        }

        .contact-methods {
          margin-bottom: 2rem;
        }

        .contact-method {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .contact-method i {
          width: 20px;
          color: var(--accent-primary);
        }

        .contact-method a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }

        .contact-method a:hover {
          color: var(--accent-primary);
        }

        .contact-method span {
          color: var(--text-secondary);
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          text-decoration: none;
          transition: var(--transition);
        }

        .social-link:hover {
          background: var(--accent-primary);
          color: var(--text-primary);
          transform: translateY(-5px);
        }

        .contact-form {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          padding: 2rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-primary);
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius);
          color: var(--text-primary);
          font-size: 1rem;
          transition: var(--transition);
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
          font-family: inherit;
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;