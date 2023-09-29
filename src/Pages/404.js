import React from 'react';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: '#f5f5f5',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          padding: '2rem',
          backgroundColor: 'white',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '10px',
        }}
      >
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#e74c3c' }}>404</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#333' }}>
          Oops! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          style={{
            textDecoration: 'none',
            backgroundColor: '#3498db',
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease',
          }}
        >
          Go back to homepage
        </a>
      </div>
    </div>
  );
};

export default NotFound;
