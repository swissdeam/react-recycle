import React from "react";
import { Stage, Layer, Rect, Text } from "react-konva";

const HomepageCanvas = () => {
  // Screen dimensions
  const stageWidth = window.innerWidth;
  const stageHeight = window.innerHeight;

  // Define tiles with positions, sizes, and levels
  const tiles = [
    { width: 300, height: 500, color: '#3ABEFF',  link: "/products", offsetX: -600, offsetY: -300 }, //blue
    { width: 300, height: 220, color: "#FFE45E", link: "/production", offsetX: -350, offsetY: -120 },//yellow
    { width: 150, height: 340, color: "#1C1D21", link: "/sustainability", offsetX: -400, offsetY: -50 }, //black
    { width: 120, height: 180, color: "lightgray", link: "/about", offsetX: -150, offsetY: 50 },
    { width: 150, height: 210, color: "#E55934", link: "/nature", offsetX: 50, offsetY: 100 }, //orange
    { width: 130, height: 190, color: "lightblue", link: "/shop", offsetX: 200, offsetY: 50 },
  ];

  const handleTileClick = (link) => {
    window.location.href = link; // Navigate to the desired section
  };

  return (
    <Stage width={stageWidth} height={stageHeight} style={{ backgroundColor: "#ffffff" }}>
      <Layer>
        {tiles.map((tile, index) => (
          <React.Fragment key={index}>
            {/* Center each tile dynamically */}
            <Rect
              x={stageWidth / 2 + tile.offsetX} // Center horizontally, then adjust with offsetX
              y={stageHeight / 2 + tile.offsetY} // Center vertically, then adjust with offsetY
              width={tile.width}
              height={tile.height}
              fill={tile.color}
              onClick={() => handleTileClick(tile.link)}
            />
            {/* Add a label below each tile */}
            <Text
              x={stageWidth / 2 + tile.offsetX}
              y={stageHeight / 2 + tile.offsetY + tile.height + 10}
              text={tile.label}
              fontSize={18}
              fill="black"
              width={tile.width}
              align="center"
            />
          </React.Fragment>
        ))}
      </Layer>
    </Stage>
  );
};

export default HomepageCanvas;

