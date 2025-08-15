import { useEffect } from 'react';

const ParticleEffect = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (Math.random() > 0.95) {
        createParticle(e.clientX, e.clientY);
      }
    };

    const createParticle = (x, y) => {
      const particle = document.createElement('div');
      particle.style.position = 'fixed';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.width = '4px';
      particle.style.height = '4px';
      particle.style.background = 'var(--accent-primary)';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = '1000';
      particle.style.opacity = '0.8';
      particle.style.transform = 'translate(-50%, -50%)';
      
      const animation = particle.animate([
        { transform: 'translate(-50%, -50%) scale(1)', opacity: 0.8 },
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 0 }
      ], {
        duration: 800,
        easing: 'ease-out'
      });
      
      document.body.appendChild(particle);
      
      animation.onfinish = () => {
        if (document.body.contains(particle)) {
          particle.remove();
        }
      };
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default ParticleEffect;