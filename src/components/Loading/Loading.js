import React from 'react';

function Loading() {
  return (
    <div style={{position: 'relative'}}>
      <div style={{
        position: 'absolute',
        top: '45vh',
        left: '45%',
        fontSize: '3rem',
        color: '#433e90',
        fontWeight: 'bold'
      }}>
        Loading...
      </div>
    </div>
  );
}

export default Loading;