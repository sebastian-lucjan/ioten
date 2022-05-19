import { useEffect, useState } from 'react';

const useDeviceCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 190, y: 200 });

  // if (window) {
  //   window.addEventListener('deviceorientation', (event) => {
  //     // console.log('event.alpha ->', event.alpha);
  //     console.log('event.beta ->', event.beta);
  //     console.log('event.gamma ->', event.gamma);
  //   });
  // }

  useEffect(() => {
    const handleChangeDevicesOrientation = (e) => {
      // const screenUsedWidth = window.innerWidth <= 768 ? window.innerWidth : window.innerWidth / 2;
      const { beta, gamma } = e;

      let xCord;
      let yCord;

      if (beta >= -90 && beta <= 90) {
        yCord = 200 - (3 * beta) / 4;
      }
      if (beta < -90) {
        yCord = 200 + (3 * (beta + 180)) / 4;
      }
      if (beta > 90) {
        yCord = 200 + (3 * (beta - 180)) / 4;
      }
      if (gamma >= 0) {
        xCord = 190 + (2 * -gamma) / 3;
      }
      if (gamma < 0) {
        xCord = 190 - (2 * gamma) / 3;
      }
      if (gamma >= 0 && (beta >= 90 || beta <= -90)) {
        xCord = 190 + (2 * gamma) / 3;
      }
      if (gamma < 0 && (beta >= 90 || beta <= -90)) {
        xCord = 190 + (2 * gamma) / 3;
      }

      setCoordinates({ x: xCord, y: yCord });
    };

    window.addEventListener('deviceorientation', handleChangeDevicesOrientation);

    return () => {
      window.removeEventListener('deviceorientation', handleChangeDevicesOrientation);
    };
  }, [coordinates]);

  return { x: coordinates.x, y: coordinates.y };
};

export default useDeviceCoordinates;
