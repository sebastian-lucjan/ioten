import { useEffect, useState } from 'react';

const useLumpCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 160, y: 160, device: 'cursor' });

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      const handleChangeDevicesOrientation = (e) => {
        const { beta, gamma } = e;

        let xCord;
        let yCord;

        if (beta >= -90 && beta <= 90) {
          yCord = 200 - (5 * beta) / 4;
        }
        if (beta < -90) {
          yCord = 200 + (5 * (beta + 180)) / 4;
        }
        if (beta > 90) {
          yCord = 200 + (5 * (beta - 180)) / 4;
        }
        if (gamma >= 0) {
          xCord = 190 - gamma;
        }
        if (gamma < 0) {
          xCord = 190 - gamma;
        }
        if (gamma >= 0 && (beta >= 90 || beta <= -90)) {
          xCord = 190 + gamma;
        }
        if (gamma < 0 && (beta >= 90 || beta <= -90)) {
          xCord = 190 + gamma;
        }

        setCoordinates({ x: xCord, y: yCord, device: 'touch' });
      };

      window.addEventListener('deviceorientation', handleChangeDevicesOrientation);

      return () => {
        window.removeEventListener('deviceorientation', handleChangeDevicesOrientation);
      };
    }
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

      setCoordinates({ x: xCord, y: yCord, device: 'cursor' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [coordinates]);

  return { x: coordinates.x, y: coordinates.y, device: coordinates.device };
};

export default useLumpCoordinates;
