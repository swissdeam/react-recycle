import React
  from 'react';
  import HorizontalScrollComponent from '../components/HorizontalScrollComponent';
  

  function PeoplePage(){
    return (
      <div>
        <HorizontalScrollComponent>
        <div style={{ minWidth: '100vw', height: '100vh', backgroundColor: 'lightblue' }}>
          <h1>Page 1 Content</h1>
          <p>Content specific to page 1 goes here.</p>
        </div>
        <div style={{ minWidth: '100vw', height: '100vh', backgroundColor: 'lightcoral' }}>
          <h1>Page 2 Content</h1>
          <p>Content specific to page 2 goes here.</p>
        </div>
        <div style={{ minWidth: '100vw', height: '100vh', backgroundColor: 'lightgreen' }}>
          <h1>Page 3 Content</h1>
          <p>Content specific to page 3 goes here.</p>
        </div>
        </HorizontalScrollComponent>
      </div>
    )
  }
  export default PeoplePage;