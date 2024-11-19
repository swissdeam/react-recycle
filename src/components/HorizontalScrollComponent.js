// src/components/HorizontalScrollComponent.js
import React, { useRef } from 'react';

const HorizontalScrollComponent = ({ children }) => {
  const scrollContainerRef = useRef(null);

  const handleScroll = (event) => {
    event.preventDefault();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      onWheel={handleScroll}
      style={{
        display: 'flex',
        overflowX: 'auto',
        width: '100vw',
        height: '100vh',
        whiteSpace: 'nowrap',
      }}
    >
    {children}
    </div>
  );
};

export default HorizontalScrollComponent;
