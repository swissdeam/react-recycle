import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../assets/1_bag.png';
import image2 from '../assets/2_bag.png';
import image3 from '../assets/3_bag.png';
import image4 from '../assets/1_bag.png';
import image5 from '../assets/2_bag.png';
import image6 from '../assets/3_bag.png';
import staticImage1 from '../assets/Vector 4.png';
import staticImage2 from '../assets/We Recycle.png';
import staticImage3 from '../assets/We Work.png';

const images = [
  { src: image1, alt: 'Menu 1', link: '/nature' },
  { src: image2, alt: 'Menu 2', link: '/manufacture' },
  { src: image3, alt: 'Menu 3', link: '/people' },
  { src: image4, alt: 'Menu 4', link: '/items' },
  { src: image5, alt: 'Menu 5', link: '/qwiz' },
  { src: image6, alt: 'Menu 6', link: '/simple' },
  // Add more images as needed
];

const staticImages = [
  { src: staticImage1, alt: 'Static 1', position: { top: '50%', left: '20%' }},
  { src: staticImage2, alt: 'Static 2', position: { top: '70%', left: '0%' } },
  { src: staticImage3, alt: 'Static 3', position: { top: '0%', left: '40%' } },
  // Add more static images with specific positions
];

const MainPage= () => {
  const generateRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 80)}vh`,
    left: `${Math.floor(Math.random() * 80)}vw`,
  });

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>

{staticImages.map((staticImage, index) => (
        <img
          key={index}
          src={staticImage.src}
          alt={staticImage.alt}
          style={{
            position: 'absolute',
            top: staticImage.position.top,
            left: staticImage.position.left,
            width: '1135px',
            height: '177px',
          }}
        />
      ))}
      {images.map((image, index) => (
        <Link
          key={index}
          to={image.link} // Use "to" for internal links with React Router
          style={{
            position: 'absolute',
            ...generateRandomPosition(),
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
          />
        </Link>
      ))}
    
    </div>
  );
};


  
  export default MainPage;