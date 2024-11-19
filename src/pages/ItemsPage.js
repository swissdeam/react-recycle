import React
  from 'react';
  import HorizontalScrollComponent from '../components/HorizontalScrollComponent';
  import '../components/HorizontalPage.css';
  import itemsImage from '../assets/ПРОДУКЦИЯ.png';

  const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  function ItemsPage(){
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
              src={itemsImage} 
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

  export default ItemsPage;