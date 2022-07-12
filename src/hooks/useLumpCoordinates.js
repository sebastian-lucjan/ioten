import { useEffect, useState } from 'react';

const useLumpCoordinates = () => {
  const [coordinates, setCoordinates] = useState({ x: 200, y: 170, device: 'cursor' });

  useEffect(() => {
    // touchable screen (mobile, tablet)
    // if (window.matchMedia('(pointer: coarse)').matches) {
    //   const handleChangeDevicesOrientation = (e) => {
    //     const { beta, gamma } = e;
    //
    //     let xCord;
    //     let yCord;
    //
    //     if (beta >= -90 && beta <= 90) {
    //       yCord = 200 - (5 * beta) / 4;
    //     }
    //     if (beta < -90) {
    //       yCord = 200 + (5 * (beta + 180)) / 4;
    //     }
    //     if (beta > 90) {
    //       yCord = 200 + (5 * (beta - 180)) / 4;
    //     }
    //     if (gamma >= 0) {
    //       xCord = 190 - gamma;
    //     }
    //     if (gamma < 0) {
    //       xCord = 190 - gamma;
    //     }
    //     if (gamma >= 0 && (beta >= 90 || beta <= -90)) {
    //       xCord = 190 + gamma;
    //     }
    //     if (gamma < 0 && (beta >= 90 || beta <= -90)) {
    //       xCord = 190 + gamma;
    //     }
    //
    //     setCoordinates({ x: xCord, y: yCord, device: 'touch' });
    //     // console.log('here');
    //   };
    //
    //   window.addEventListener('deviceorientation', handleChangeDevicesOrientation);
    //
    //   return () => window.removeEventListener('deviceorientation', handleChangeDevicesOrientation);
    // }

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

      console.log('here test');
      setCoordinates({ x: xCord, y: yCord, device: 'cursor' });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [coordinates]);

  // const onDeviceOrientation = (event) => {
  //   console.log('here', event);
  //   setCoordinates({ x: DeviceMotionEvent.beta, y: DeviceMotionEvent.gamma, device: 'touch' });
  //   // setCoordinates({ x: xCord, y: yCord, device: 'touch' });
  // };
  //
  // console.log('x', coordinates.x);
  // console.log('y', coordinates.y);
  //
  // const revokeAccessAsync = async () => {
  //   window.removeEventListener('devicemotion', onDeviceOrientation);
  //   setCoordinates(null);
  // };
  //
  // const requestAccessAsync = async () => {
  //   if (!DeviceOrientationEvent) {
  //     return false;
  //   }
  //   console.log('1');
  //   if (window.DeviceMotionEvent && typeof window.DeviceMotionEvent.requestPermission === 'function') {
  //     // if (DeviceOrientationEvent.requestPermission && typeof DeviceMotionEvent.requestPermission === 'function') {
  //     window.DeviceMotionEvent.requestPermission()
  //       .then((response) => {
  //         if (response === 'granted') {
  //           window.addEventListener(
  //             'devicemotion',
  //             () => {
  //               console.log('DeviceMotion permissions granted.');
  //             },
  //             (e) => {
  //               console.log('e', e.message);
  //               // throw e;
  //             },
  //           );
  //         } else {
  //           console.log('DeviceMotion permissions not granted.');
  //         }
  //       })
  //       .catch((e) => {
  //         console.error(e);
  //       });
  //   }
  //
  //   window.addEventListener('devicemotion', onDeviceOrientation);
  //
  //   return true;
  // };
  //
  // const requestAccess = useCallback(requestAccessAsync, []);
  // const revokeAccess = useCallback(revokeAccessAsync, []);
  //
  // useEffect(() => {
  //   return () => {
  //     revokeAccess();
  //   };
  // }, [revokeAccess]);

  return { x: coordinates.x, y: coordinates.y, device: coordinates.device };
};

export default useLumpCoordinates;
