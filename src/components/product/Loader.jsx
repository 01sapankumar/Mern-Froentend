import React from 'react';

const Loader = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.loaderContainer}>
        <img
          src="https://v3.fal.media/files/monkey/sviaxF6hFKeDcNQDk6o4R.jpeg"
          alt="Loading..."
          style={styles.image}
        />
        <p style={styles.text}>Loading...</p>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    animation: 'fadeIn 0.5s ease-in-out',
  },
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'pulse 1.5s infinite ease-in-out',
  },
  image: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
  },
  text: {
    marginTop: '1rem',
    fontSize: '1rem',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
};

// Optional global animation (inject this into index.css or global.css)
/*
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1 }
  50% { transform: scale(1.05); opacity: 0.8 }
}
*/

export default Loader;
