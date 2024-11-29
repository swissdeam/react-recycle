import React
  from 'react';
  import prirodaImage from '../assets/123.png';
import HorizontalScrollComponent from '../components/HorizontalScrollComponent';


  function QwizPages(){
    return (
      <div style={{
        margin: 0,
        padding: 0,
        overflow: 'hidden'
      }}>
        <HorizontalScrollComponent>
          <div style={{ 
            minWidth: '600vw', 
            height: '100vh', 
            backgroundColor: '#3ABEFF',
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
  export default QwizPages;