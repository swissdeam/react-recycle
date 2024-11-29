import React
  from 'react';
  import HorizontalScrollComponent from '../components/HorizontalScrollComponent';
  import manufactureImage from '../assets/ПРОИЗВОДСТВО.png';

  function ManufacturePage(){
    return (
      <div style={{
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        <HorizontalScrollComponent>
          <div style={{ 
            minWidth: '1000vw', 
            height: '100vh', 
            backgroundColor: '#FFE45E',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}>
            <img 
              src={manufactureImage} 
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
  export default ManufacturePage;