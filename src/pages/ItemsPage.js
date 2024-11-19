import React
  from 'react';
  import HorizontalScrollComponent from '../components/HorizontalScrollComponent';
  import '../components/HorizontalPage.css';

  const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];

const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  function ItemsPage(){
    return (

      
      <div className="horizontal-container">
        <HorizontalScrollComponent>
    
          <section className="page-section">
          <p>Content specific to page 1 goes here.</p>
          </section>
         
     
        <section className="page-section">
        <h1>Page 2 Content</h1>
          <p>Content specific to page 2 goes here.</p>
        </section >
        <section className="page-section">
        <h1>Page 3 Content</h1>
          <p>Content specific to page 3 goes here.</p>
        </section >
          
        
        </HorizontalScrollComponent>
      </div>
    )
  }

  export default ItemsPage;