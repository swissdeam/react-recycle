import React from 'react';
import { Link } from 'react-router-dom';

  function MainPage(){
    return (
      <div>
        <h1>Главная страница с навигацией</h1>
        <ul>
          <li><Link to="/nature">nature</Link></li>
          <li><Link to="/simple">Simple Page</Link></li>
          <li><Link to="/people">People Page</Link></li>
          <li><Link to="/items">Items Page</Link></li>
          <li><Link to="/qwiz">Qwiz Page</Link></li>
          <li><Link to="/manufacture">Manufacture Page</Link></li>
        </ul>
      </div>
    )
  }
  export default MainPage;