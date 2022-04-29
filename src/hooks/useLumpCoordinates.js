import { useEffect, useState } from 'react';

const useLumpCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 160, y: 160 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenUsedWidth = window.innerWidth <= 768 ? window.innerWidth : window.innerWidth / 2;

      const cursorX = e.clientX;
      let xCord = 140 + (cursorX * 100) / screenUsedWidth;

      if (xCord > 240) {
        xCord = 240;
      }

      const cursorY = e.clientY;
      let yCord = 150 + (cursorY * 100) / screenUsedWidth;

      if (yCord > 250) {
        yCord = 250;
      }

      setCoordinates({ x: xCord, y: yCord });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coordinates]);

  return { x: coordinates.x, y: coordinates.y };
};

export default useLumpCoordinates;
