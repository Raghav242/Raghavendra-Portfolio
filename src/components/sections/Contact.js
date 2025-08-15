import React, { useState } from 'react';

const Contact = () => {
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
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:kulkarni.ragh@northeastern.edu?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '4rem 0', scrollMarginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem', 
          textAlign: 'center',
          color: 'var(--text-primary)',
          marginTop: '1rem'
        }}>
          Let's Work Together
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              marginBottom: '0.8rem',
              color: 'var(--text-primary)'
            }}>
              Get In Touch
            </h3>
            <p style={{
              color: 'var(--text-secondary)',
              marginBottom: '1.2rem',
              fontSize: '0.95rem',
              lineHeight: 1.5
            }}>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and software development.
            </p>
            
            <div style={{ marginBottom: '1.2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.7rem'
              }}>
                <i className="fas fa-envelope" style={{
                  width: '16px',
                  color: 'var(--accent-primary)',
                  fontSize: '0.9rem'
                }}></i>
                <a href="mailto:kulkarni.ragh@northeastern.edu" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                  kulkarni.ragh@northeastern.edu
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.7rem'
              }}>
                <i className="fas fa-phone" style={{
                  width: '16px',
                  color: 'var(--accent-primary)',
                  fontSize: '0.9rem'
                }}></i>
                <a href="tel:+18576542114" style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}>
                  +1 (857) 654-2114
                </a>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                marginBottom: '0.7rem'
              }}>
                <i className="fas fa-map-marker-alt" style={{
                  width: '16px',
                  color: 'var(--accent-primary)',
                  fontSize: '0.9rem'
                }}></i>
                <span style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem'
                }}>
                  Boston, MA, USA
                </span>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.7rem'
            }}>
              <a 
                href="https://github.com/Raghav242" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <i className="fab fa-github"></i>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/raghavendra-kulkarni-599815185/" 
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a 
                href={`${process.env.PUBLIC_URL}/assets/resume/Raghavendra_Kulkarni_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                download="Raghavendra_Kulkarni_Resume.pdf"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                <i className="fas fa-file-alt"></i>
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--border-radius)',
            padding: '1.5rem'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="name" style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}>
                Name
              </label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
                style={{
                  width: '100%',
                  padding: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="email" style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}>
                Email
              </label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleInputChange}
                required 
                style={{
                  width: '100%',
                  padding: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{
                display: 'block',
                marginBottom: '0.3rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                fontSize: '0.9rem'
              }}>
                Message
              </label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--border-radius)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  minHeight: '70px',
                  resize: 'vertical',
                  fontFamily: 'inherit'
                }}
              ></textarea>
            </div>
            
            <button type="submit" style={{
              padding: '10px 16px',
              borderRadius: 'var(--border-radius)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem',
              background: 'var(--accent-gradient)',
              color: 'var(--text-primary)',
              width: '100%',
              justifyContent: 'center'
            }}>
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;