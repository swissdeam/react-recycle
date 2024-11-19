import React from 'react';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent';
import prirodaImage from '../assets/ПРИРОДА.png'; // Adjust the path and extension as needed

function NaturePage(){
  return (
    <div style={{
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <HorizontalScrollComponent>
        <div style={{ 
          minWidth: '300vw', 
          height: '100vh', 
          backgroundColor: '#BEFFC7',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}>
          <img 
            src={prirodaImage} 
            alt="Природа"
            style={{
              height: '80vh', // Adjust this value as needed
              margin: '0 0 0 50px',
              objectFit: 'contain'
            }}
          />
        </div>
      </HorizontalScrollComponent>
    </div>
  )
}

export default NaturePage;