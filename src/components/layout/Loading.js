import React from 'react';

const Loading = () => {
  const loadingStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'var(--bg-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '3px solid var(--border-color)',
    borderTop: '3px solid var(--accent-primary)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  return (
    <div style={loadingStyle}>
      <div style={spinnerStyle}></div>
      
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;