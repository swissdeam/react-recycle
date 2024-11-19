import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer, Rect, Text, Image } from "react-konva";
import Matter from 'matter-js';
import product1Image from '../assets/1.png';
import nature1Image from '../assets/Природа1.png';
import product2Image from '../assets/Продукция2.png';
import manufacture3Image from '../assets/Производство3.png';

const HomepageCanvas = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const [currentEmojiIndex, setCurrentEmojiIndex] = useState(0);
  const stageRef = useRef(null);
  const engineRef = useRef(null);
  const particlesRef = useRef([]);
  const [hoveredTile, setHoveredTile] = useState(null);
  const [images, setImages] = useState({});

  // Screen dimensionss
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  // Define tiles with positions, sizes, and levels
  const tiles = [
    { width: 300, height: 500, color: '#3ABEFF',  link: "/qwiz", offsetX: -600, offsetY: -300, image: product1Image, hoverImageSize: { width: 200, height: 350 } },
    { width: 300, height: 220, color: "#FFE45E", link: "/manufacture", offsetX: -350, offsetY: -120,image: manufacture3Image, hoverImageSize: { width: 200, height: 200 } },
    { width: 150, height: 340, color: "#1C1D21", link: "/items", offsetX: -400, offsetY: -50,image: product2Image, hoverImageSize: { width: 200, height: 200 } },
    { width: 120, height: 180, color: "lightgray", link: "/items", offsetX: -150, offsetY: 50,image: product2Image, hoverImageSize: { width: 200, height: 200 } },
    { width: 150, height: 210, color: "#E55934", link: "/nature", offsetX: 50, offsetY: 100,image: nature1Image, hoverImageSize: { width: 200, height: 200 } },
    { width: 130, height: 190, color: "lightblue", link: "/simple", offsetX: 200, offsetY: 50,image: '/path/to/simple-image.png', hoverImageSize: { width: 200, height: 200 } },
  ];

  const emojiSets = [
    { main: '♻', trail: ['✨', '💫', '⭐', '🌟', '⚡'] },
    { main: '🐱', trail: ['🐾', '💕', '💖', '💗', '💓'] },
    { main: '🚀', trail: ['💫', '🌠', '⭐', '✨', '🌟'] },
    { main: '🌈', trail: ['🌸', '🌺', '🌼', '🌻', '🌹'] },
  ];

  useEffect(() => {
    // Initialize Matter.js
    const engine = Matter.Engine.create({
      enableSleeping: false,
    });
    
    // Отключаем гравитацию
    engine.world.gravity.y = 0;
    engineRef.current = engine;

    // Создаем частицы
    const particles = emojiSets[0].trail.map(() => {
      return Matter.Bodies.circle(
        window.innerWidth / 2,
        window.innerHeight / 2,
        5,
        {
          friction: 0.005,
          frictionAir: 0.02,
          restitution: 0.7,
          density: 0.001,
          inertia: Infinity,
          inverseInertia: 0,
        }
      );
    });

    particlesRef.current = particles;
    Matter.World.add(engine.world, particles);

    // Создаем более свободные связи между частицами
    for (let i = 0; i < particles.length - 1; i++) {
      const constraint = Matter.Constraint.create({
        bodyA: particles[i],
        bodyB: particles[i + 1],
        stiffness: 0.05,
        length: 35,
        damping: 0.3,
      });
      Matter.World.add(engine.world, constraint);
    }

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Runner.stop(runner);
      Matter.Engine.clear(engine);
    };
  }, []);

  useEffect(() => {
    document.body.style.cursor = 'none';
    let isMoving = false;
    let moveTimeout;
    
    const handleMouseMove = (e) => {
      const stage = stageRef.current;
      if (!stage) return;
      
      const { x, y } = stage.getPointerPosition() || { x: 0, y: 0 };
      setCursorPosition({ x, y });

      // Проверяем, находится ли курсор над каким-либо тайлом
      const hoveredTile = tiles.find(tile => {
        const tileX = stageWidth / 2 + tile.offsetX;
        const tileY = stageHeight / 2 + tile.offsetY;
        return x >= tileX && 
               x <= tileX + tile.width &&
               y >= tileY && 
               y <= tileY + tile.height;
      });

      // Устанавливаем hoveredTile
      setHoveredTile(hoveredTile ? hoveredTile.link : null);

      // Определяем, движется ли курсор
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        isMoving = false;
      }, 50);

      // Обновляем позиции частиц
      if (particlesRef.current.length > 0) {
        const leader = particlesRef.current[0];
        const velocity = {
          x: (x - leader.position.x) * 0.1,
          y: (y - leader.position.y) * 0.1
        };
        
        Matter.Body.setVelocity(leader, velocity);
        Matter.Body.setPosition(leader, { x, y });
      }
    };

    const handleClick = (e) => {
      // Check if click is on a tile
      const stage = stageRef.current;
      if (!stage) return;
      
      const { x, y } = stage.getPointerPosition() || { x: 0, y: 0 };
      
      // Find clicked tile
      const clickedTile = tiles.find(tile => {
        const tileX = stageWidth / 2 + tile.offsetX;
        const tileY = stageHeight / 2 + tile.offsetY;
        return x >= tileX && x <= tileX + tile.width &&
               y >= tileY && y <= tileY + tile.height;
      });

      if (clickedTile) {
        window.location.href = clickedTile.link;
      } else {
        setCurrentEmojiIndex(prev => (prev + 1) % emojiSets.length);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      document.body.style.cursor = 'default';
    };
  }, []);

  // Обновляем позиции для рендеринга
  useEffect(() => {
    let animationId;
    
    const updatePositions = () => {
      if (particlesRef.current.length > 0) {
        setParticles(
          particlesRef.current.map(particle => ({
            x: particle.position.x,
            y: particle.position.y
          }))
        );
      }
      animationId = requestAnimationFrame(updatePositions);
    };

    animationId = requestAnimationFrame(updatePositions);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleTileClick = (link) => {
    window.location.href = link;
  };

  // Загрузка изображений
  useEffect(() => {
    tiles.forEach(tile => {
      const img = new window.Image();
      img.src = tile.image;
      img.onload = () => {
        setImages(prev => ({
          ...prev,
          [tile.link]: img
        }));
      };
    });
  }, []);

  return (
    <Stage 
      width={stageWidth} 
      height={stageHeight} 
      style={{ backgroundColor: "#ffffff" }}
      ref={stageRef}
    >
      <Layer>
        {tiles.map((tile, index) => (
          <React.Fragment key={index}>
            <Rect
              x={stageWidth / 2 + tile.offsetX}
              y={stageHeight / 2 + tile.offsetY}
              width={tile.width}
              height={tile.height}
              fill={tile.color}
              onClick={() => handleTileClick(tile.link)}
              onMouseEnter={() => setHoveredTile(tile.link)}
              onMouseLeave={() => setHoveredTile(null)}
            />
            <Text
              x={stageWidth / 2 + tile.offsetX}
              y={stageHeight / 2 + tile.offsetY + tile.height + 10}
              text={tile.label}
              fontSize={18}
              fill="black"
              width={tile.width}
              align="center"
            />
            {/* Hover Image */}
            {hoveredTile === tile.link && images[tile.link] && (
              <Image
                x={stageWidth / 2 + tile.offsetX + (tile.width - tile.hoverImageSize.width) / 2}
                y={stageHeight / 2 + tile.offsetY + (tile.height - tile.hoverImageSize.height) / 2}
                image={images[tile.link]}
                width={tile.hoverImageSize.width}
                height={tile.hoverImageSize.height}
              />
            )}
          </React.Fragment>
        ))}

        {/* Trail emojis */}
        {particles.map((pos, index) => (
          <Text
            key={`trail-${index}`}
            x={pos.x}
            y={pos.y}
            text={emojiSets[currentEmojiIndex].trail[index]}
            fontSize={24 - index * 2}
            offsetX={12}
            offsetY={12}
            opacity={1 - (index * 0.15)}
          />
        ))}

        {/* Main cursor emoji */}
        <Text
          x={cursorPosition.x}
          y={cursorPosition.y}
          text={emojiSets[currentEmojiIndex].main}
          fontSize={24}
          offsetX={12}
          offsetY={12}
        />
      </Layer>
    </Stage>
  );
};

export default HomepageCanvas;

