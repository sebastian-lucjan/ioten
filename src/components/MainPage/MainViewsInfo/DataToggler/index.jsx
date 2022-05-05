import gsap from 'gsap';
import { useContext, useEffect, useRef } from 'react';
import MainPageContext from 'src/context/mainPageContext';
import { ToggleBody, TogglerHandle, Wrapper } from './DataToggler.styles';

export default function DataToggler() {
  const { dataBooster, setDataBooster } = useContext(MainPageContext);
  const tl = useRef(null);
  const togglerRef = useRef(null);

  const handleClick = () => {
    if (dataBooster === 'boost-chart') {
      setDataBooster('boost-chart-reverse');
    } else if (dataBooster === 'boost-chart-reverse' || dataBooster === 'initial-state') {
      setDataBooster('boost-chart');
    }
  };

  useEffect(() => {
    if (dataBooster === 'initial-state') {
      const { current: el } = togglerRef;
      tl.current = gsap.timeline();

      const toggler = el.querySelector('.toggler');

      tl.current.to(toggler, { scale: 1.14, delay: 1.2, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1.14, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1.14, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1.14, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1.14, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: -5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: -5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: -5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: -5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 0, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: -5, ease: 'power1.inOut' });
      tl.current.to(toggler, { scale: 1, duration: 0.1, rotate: 0, ease: 'power1.inOut' });
    }
    return () => {
      if (dataBooster === 'initial-state') {
        tl.current.kill();
      }
    };
  }, [dataBooster]);

  return (
    <Wrapper ref={togglerRef}>
      <ToggleBody className="toggler" onClick={handleClick}>
        <TogglerHandle boost={dataBooster} onClick={handleClick} />
      </ToggleBody>
    </Wrapper>
  );
}
