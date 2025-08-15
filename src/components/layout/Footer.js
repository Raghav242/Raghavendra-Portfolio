import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Raghavendra Kulkarni. Built with passion and code.</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 2rem 0;
          text-align: center;
        }

        .footer p {
          color: var(--text-muted);
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;