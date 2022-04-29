import { useEffect, useState } from 'react';

const useCircleTranslateCords = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const screenUsedWidth = window.innerWidth <= 768 ? window.innerWidth : window.innerWidth / 2;
      const screenUsedHeight = window.innerHeight;

      const cursorX = e.clientX;
      let xCord = -50 + (cursorX / screenUsedWidth) * 100;

      if (xCord > 50) {
        xCord = 50;
      } else if (xCord < -50) {
        xCord = -50;
      }

      const cursorY = e.clientY;
      let yCord = 50 - [(cursorY / screenUsedHeight) * 100];

      if (yCord > 50) {
        yCord = 50;
      } else if (yCord < -50) {
        yCord = -50;
      }

      setCoordinates({ x: xCord, y: yCord });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coordinates]);

  return { translateX: coordinates.x, translateY: coordinates.y };
};

export default useCircleTranslateCords;
