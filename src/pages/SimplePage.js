import React
  from 'react';
  import HorizontalScrollComponent from '../components/HorizontalScrollComponent';

  function SimplePage(){
    return (
      <div>
        <HorizontalScrollComponent>
        <div style={{ minWidth: '500vw', height: '100vh', backgroundColor: 'lightblue' }}>
         
        </div>
        
        </HorizontalScrollComponent>
      </div>
    )
  }
  export default SimplePage;